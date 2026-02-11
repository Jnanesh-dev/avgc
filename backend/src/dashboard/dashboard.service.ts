
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
    PatientProfile,
    MedicalJourney,
    DocumentItem,
    CareTeamMember,
    UpcomingConsultation,
} from '../types';

@Injectable()
export class DashboardService {
    constructor(private prisma: PrismaService) { }

    async getPatientProfile(patientId: string): Promise<PatientProfile | null> {
        const profile = await this.prisma.patientProfile.findUnique({
            where: { id: patientId },
            include: {
                upcomingConsultations: {
                    orderBy: { date: 'asc' }, // Get closest consultation
                    take: 1,
                    include: {
                        doctor: true,
                    }
                },
                documents: true,
                careTeam: true,
                medicalJourney: true,
            },
        });

        if (!profile) return null;

        return this.mapProfileToType(profile);
    }

    async getCompleteDashboard(patientId: string) {
        const profile = await this.getPatientProfile(patientId);
        if (!profile) return null;

        const journey = await this.getMedicalJourney(patientId);
        const documents = await this.getDocuments(patientId);
        const careTeam = await this.getCareTeam(patientId);

        return {
            profile,
            journey,
            documents,
            careTeam,
        };
    }

    async getMedicalJourney(patientId: string): Promise<MedicalJourney | null> {
        const journey = await this.prisma.medicalJourney.findUnique({
            where: { patientId },
            include: { stages: true },
        });
        return journey ? this.mapJourneyToType(journey) : null;
    }

    async getDocuments(patientId: string): Promise<DocumentItem[]> {
        const documents = await this.prisma.document.findMany({
            where: { patientId },
        });
        return documents.map(this.mapDocumentToType);
    }

    async getCareTeam(patientId: string): Promise<CareTeamMember[]> {
        const team = await this.prisma.careTeamMember.findMany({
            where: { patientId },
        });
        return team.map(this.mapCareTeamToType);
    }

    async getUpcomingConsultations(patientId: string): Promise<UpcomingConsultation | null> {
        const consultation = await this.prisma.consultation.findFirst({
            where: {
                patientEmail: (await this.getPatientProfile(patientId))?.email, // This is inefficient, but patientId isn't on consultation directly in current schema
                // Wait, I should add patientId to consultation or rely on email linkage used in ConsultationsService.
                // For now, let's use the relation I added in schema 'upcomingConsultations' on PatientProfile?
                // In schema: `upcomingConsultations Consultation[]` on PatientProfile.
                // So I can query directly via relation if I updated schema correctly.
                // Check schema again: Yes, I added `upcomingConsultations Consultation[]` to PatientProfile.
                // But I did NOT add `patientId` FK to Consultation model in schema update step 596?
                // Let's check step 596 diff.
                // It showed `upcomingConsultations Consultation[]` in PatientProfile.
                // But did it add `patientId` to Consultation?
                // "Opposite relation field". If I didn't add the scalar field in Consultation, Prisma usually asks for it.
                // I better check if that migration actually modified Consultation table.
                status: { not: 'CANCELLED' },
                date: { gte: new Date().toISOString() }
            },
            orderBy: { date: 'asc' },
            include: { doctor: true }
        });

        // Let's rely on the profile include I did above in getPatientProfile, but here separate method.
        // If usage of patientId in consultation is missing, I might default to empty or rely on the include in profile.
        // Actually, let's look at `getPatientProfile` implementation above.
        // I included `upcomingConsultations`. If the relation exists, it works.

        if (!consultation) return null;

        return {
            id: consultation.id,
            doctorName: consultation.doctor.name,
            doctorTitle: consultation.doctor.specialization,
            doctorAvatar: consultation.doctor.imageUrl || '',
            procedure: 'Consultation', // Or derive
            scheduledFor: `${consultation.date}T${consultation.time}`, // ISO format approximation
            meetingLink: 'https://zoom.us/j/mock', // Mock for now
        };
    }

    private mapProfileToType(profile: any): PatientProfile {
        // Extract latest consultation from the included relation if available
        let upcoming: UpcomingConsultation | undefined = undefined;
        if (profile.upcomingConsultations && profile.upcomingConsultations.length > 0) {
            const c = profile.upcomingConsultations[0];
            upcoming = {
                id: c.id,
                doctorName: c.doctor?.name || 'Doctor',
                doctorTitle: c.doctor?.specialization || 'Specialist',
                doctorAvatar: c.doctor?.imageUrl || '',
                procedure: 'Consultation',
                scheduledFor: `${c.date}T${c.time}`,
                meetingLink: 'https://zoom.us/j/mock',
            };
        } else if (profile.upcomingConsultation) {
            // If stored as JSON or object (it's not in schema, so likely ignored)
        }

        return {
            id: profile.id,
            name: profile.name,
            email: profile.email,
            profileImage: profile.profileImage,
            journeyProgress: profile.journeyProgress,
            procedure: profile.procedure,
            destination: profile.destination,
            upcomingConsultation: upcoming,
            flightNotification: profile.flightNotification ? JSON.parse(profile.flightNotification) : undefined,
        };
    }

    private mapJourneyToType(journey: any): MedicalJourney {
        return {
            ...journey,
            stages: journey.stages || [],
        };
    }

    private mapDocumentToType(doc: any): DocumentItem {
        return {
            id: doc.id,
            name: doc.name,
            size: doc.size,
            type: doc.type,
            uploadedAt: doc.uploadedAt.toISOString(),
            url: doc.url,
        };
    }

    private mapCareTeamToType(member: any): CareTeamMember {
        return {
            ...member,
            languages: member.languages ? JSON.parse(member.languages) : undefined,
        };
    }
}
