import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    OnGatewayConnection,
    OnGatewayDisconnect,
    MessageBody,
    ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessagesService } from './messages.service';
import { UserRole, MessageType } from '../types';

@WebSocketGateway({
    cors: {
        origin: 'http://localhost:3001',
        credentials: true,
    },
    namespace: '/messages',
})
export class MessagesGateway
    implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    constructor(private readonly messagesService: MessagesService) { }

    handleConnection(client: Socket) {
        console.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
    }

    @SubscribeMessage('join_conversation')
    handleJoinConversation(
        @MessageBody() data: { conversationId: string },
        @ConnectedSocket() client: Socket,
    ) {
        client.join(data.conversationId);
        console.log(`Client ${client.id} joined conversation ${data.conversationId}`);
        return { success: true };
    }

    @SubscribeMessage('send_message')
    async handleSendMessage(
        @MessageBody()
        data: {
            conversationId: string;
            senderId: string;
            senderName: string;
            senderRole: UserRole;
            content: string;
            type?: MessageType;
        },
        @ConnectedSocket() client: Socket,
    ) {
        const message = await this.messagesService.createMessage(data);

        // Broadcast to all clients in the conversation room
        this.server.to(data.conversationId).emit('new_message', message);

        return message;
    }

    @SubscribeMessage('typing')
    handleTyping(
        @MessageBody()
        data: {
            conversationId: string;
            userId: string;
            userName: string;
            isTyping: boolean;
        },
        @ConnectedSocket() client: Socket,
    ) {
        // Broadcast to others in the conversation (exclude sender)
        client.to(data.conversationId).emit('user_typing', {
            userId: data.userId,
            userName: data.userName,
            isTyping: data.isTyping,
        });
    }

    @SubscribeMessage('mark_as_read')
    async handleMarkAsRead(
        @MessageBody() data: { messageId: string; userId: string },
    ) {
        const message = await this.messagesService.markAsRead(
            data.messageId,
            data.userId,
        );
        if (message) {
            this.server.to(message.conversationId).emit('message_read', {
                messageId: message.id,
                userId: data.userId,
            });
        }
    }
}
