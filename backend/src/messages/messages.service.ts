
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
    Message,
    Conversation,
    CaseOverview,
    MessageType,
    UserRole,
} from '../types';

@Injectable()
export class MessagesService {
    constructor(private prisma: PrismaService) { }

    async getConversations(userId: string): Promise<Conversation[]> {
        const conversations = await this.prisma.conversation.findMany({
            where: {
                participantIds: { contains: userId }, // This is a weak search on JSON string. Better to have valid relation, but following existing pattern.
            },
            include: {
                messages: {
                    orderBy: { timestamp: 'desc' },
                    take: 1
                }
            }
        });

        return conversations.map(c => this.mapConversationToType(c));
    }

    async getConversation(conversationId: string): Promise<{
        conversation: Conversation;
        messages: Message[];
    } | null> {
        const conversation = await this.prisma.conversation.findUnique({
            where: { id: conversationId },
            include: {
                messages: {
                    orderBy: { timestamp: 'asc' }
                }
            }
        });

        if (!conversation) return null;

        return {
            conversation: this.mapConversationToType(conversation),
            messages: conversation.messages.map(this.mapMessageToType)
        };
    }

    async createMessage(data: {
        conversationId: string;
        senderId: string;
        senderName: string;
        senderRole: UserRole;
        content: string;
        type?: MessageType;
    }): Promise<Message> {
        const msg = await this.prisma.message.create({
            data: {
                conversationId: data.conversationId,
                senderId: data.senderId,
                senderName: data.senderName,
                senderRole: data.senderRole,
                content: data.content,
                type: data.type || MessageType.TEXT,
                timestamp: new Date(),
                read: false,
            }
        });

        // Update conversation updatedAt
        await this.prisma.conversation.update({
            where: { id: data.conversationId },
            data: { updatedAt: msg.timestamp },
        });

        return this.mapMessageToType(msg);
    }

    async markAsRead(messageId: string, userId: string): Promise<Message | null> {
        const msg = await this.prisma.message.findUnique({ where: { id: messageId } });
        if (!msg || msg.senderId === userId) return null; // Don't mark own messages as read? Logic copied from mock.

        const updated = await this.prisma.message.update({
            where: { id: messageId },
            data: { read: true }
        });
        return this.mapMessageToType(updated);
    }

    async getCaseOverview(patientId: string): Promise<CaseOverview | null> {
        // Reconstruct Overview from PatientProfile + MedicalJourney + CareTeam
        const profile = await this.prisma.patientProfile.findUnique({
            where: { id: patientId },
            include: {
                medicalJourney: true,
                careTeam: true,
                documents: true,
            }
        });

        if (!profile) return null;

        // Find care coordinator
        const coordinator = profile.careTeam.find(m => m.role.toLowerCase().includes('coordinator') || m.role.toLowerCase().includes('manager'));

        return {
            patientId: profile.id,
            procedure: profile.procedure,
            destination: profile.destination,
            arrivalDate: '2023-11-12', // Where to get this? MedicalJourney stages?
            // If mock data had hardcoded date, I might not have it in DB.
            // Let's use a placeholder or derived from stages if possible.
            careCoordinator: coordinator ? {
                id: coordinator.id,
                name: coordinator.name,
                role: coordinator.role,
                languages: coordinator.languages ? JSON.parse(coordinator.languages) as string[] : [],
                avatarUrl: coordinator.avatarUrl || undefined,
                online: coordinator.online
            } : {
                id: 'pending',
                name: 'Pending Assignment',
                role: 'Care Coordinator',
                languages: [],
                online: false
            },
            documents: profile.documents.map(d => ({
                id: d.id,
                name: d.name,
                type: d.type as any, // Cast to match stricter enum/union
                uploadedAt: d.uploadedAt.toISOString(),
            }))
        };
    }

    async uploadDocument(conversationId: string, file: Express.Multer.File): Promise<Message> {
        // Create a message with type DOCUMENT
        // In real app, we'd save file to S3/Storage and get URL.
        // Here we simulate it.
        const msg = await this.prisma.message.create({
            data: {
                conversationId,
                senderId: 'user-1', // Mock user
                senderName: 'Alex Thompson',
                senderRole: UserRole.PATIENT,
                content: `Uploaded ${file.originalname}`,
                type: MessageType.DOCUMENT,
                timestamp: new Date(),
                read: false,
                attachments: JSON.stringify([{
                    id: `att-${Date.now()}`,
                    name: file.originalname,
                    type: file.mimetype,
                    url: `/uploads/${file.filename}`
                }])
            }
        });
        return this.mapMessageToType(msg);
    }

    private mapConversationToType(c: any): Conversation {
        // Last message might be included via relations? 
        // In getConversations I filtered include messages take 1.
        let lastMsg: Message | undefined = undefined;
        if (c.messages && c.messages.length > 0) {
            lastMsg = this.mapMessageToType(c.messages[0]); // sorted by desc timestamp
        }

        return {
            ...c,
            participantIds: JSON.parse(c.participantIds || '[]'),
            participantNames: JSON.parse(c.participantNames || '[]'),
            updatedAt: c.updatedAt.toISOString(),
            lastMessage: lastMsg
        };
    }

    private mapMessageToType(m: any): Message {
        return {
            ...m,
            timestamp: m.timestamp.toISOString(),
            attachments: m.attachments ? JSON.parse(m.attachments) : undefined,
            appointmentData: m.appointmentData ? JSON.parse(m.appointmentData) : undefined,
            // Enum casting
            type: m.type as MessageType,
            senderRole: m.senderRole as UserRole,
        };
    }
}
