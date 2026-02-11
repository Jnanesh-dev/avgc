import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Query,
    UseInterceptors,
    UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';
import { UserRole, MessageType } from '../types';
import { join } from 'path';

@Controller('messages')
export class MessagesController {
    constructor(
        private readonly messagesService: MessagesService,
        private readonly messagesGateway: MessagesGateway
    ) { }

    @Get('conversations')
    getConversations(@Query('userId') userId: string) {
        return this.messagesService.getConversations(userId || 'user-1');
    }

    @Get('conversations/:id')
    getConversation(@Param('id') id: string) {
        return this.messagesService.getConversation(id);
    }

    @Post()
    async createMessage(
        @Body()
        data: {
            conversationId: string;
            senderId: string;
            senderName: string;
            senderRole: UserRole;
            content: string;
            type?: MessageType;
        },
    ) {
        const message = await this.messagesService.createMessage(data);
        this.messagesGateway.server.to(data.conversationId).emit('new_message', message);
        return message;
    }

    @Get('case/:patientId')
    getCaseOverview(@Param('patientId') patientId: string) {
        return this.messagesService.getCaseOverview(patientId);
    }

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: join(process.cwd(), 'uploads'),
                filename: (req, file, cb) => {
                    const uniqueSuffix =
                        Date.now() + '-' + Math.round(Math.random() * 1e9);
                    cb(null, `${uniqueSuffix}-${file.originalname}`);
                },
            }),
        }),
    )
    async uploadDocument(
        @UploadedFile() file: Express.Multer.File,
        @Body('conversationId') conversationId: string,
    ) {
        const message = await this.messagesService.uploadDocument(conversationId, file);
        this.messagesGateway.server.to(conversationId).emit('new_message', message);
        return message;
    }
}
