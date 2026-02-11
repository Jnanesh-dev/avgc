import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    Query,
    HttpCode,
    HttpStatus,
    NotFoundException,
} from '@nestjs/common';
import { ConsultationsService } from './consultations.service';
import { BookingStatus, ConsultationType } from '../types';

@Controller('consultations')
export class ConsultationsController {
    constructor(
        private readonly consultationsService: ConsultationsService,
    ) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body()
        createDto: {
            doctorId: string;
            patientName: string;
            patientEmail: string;
            patientPhone?: string;
            date: string;
            time: string;
            timezone: string;
            consultationType: ConsultationType;
            duration?: number;
            fee: number;
            currency: string;
            medicalHistory?: string;
            notes?: string;
        },
    ) {
        return this.consultationsService.createConsultation(createDto);
    }

    @Get()
    findAll(
        @Query('doctorId') doctorId?: string,
        @Query('patientEmail') patientEmail?: string,
        @Query('status') status?: BookingStatus,
    ) {
        return this.consultationsService.findAll({
            doctorId,
            patientEmail,
            status,
        });
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        const consultation = this.consultationsService.findOne(id);
        if (!consultation) {
            throw new NotFoundException(`Consultation with ID ${id} not found`);
        }
        return consultation;
    }

    @Patch(':id/status')
    updateStatus(
        @Param('id') id: string,
        @Body() updateDto: { status: BookingStatus },
    ) {
        const consultation = this.consultationsService.updateStatus(
            id,
            updateDto.status,
        );
        if (!consultation) {
            throw new NotFoundException(`Consultation with ID ${id} not found`);
        }
        return consultation;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    cancel(@Param('id') id: string) {
        const consultation = this.consultationsService.cancelConsultation(id);
        if (!consultation) {
            throw new NotFoundException(`Consultation with ID ${id} not found`);
        }
        return consultation;
    }
}
