
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Consultation, ConsultationType, BookingStatus } from '../types';

@Injectable()
export class ConsultationsService {
    constructor(private prisma: PrismaService) { }

    async createConsultation(data: {
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
    }): Promise<Consultation> {
        const consultation = await this.prisma.consultation.create({
            data: {
                doctorId: data.doctorId,
                patientName: data.patientName,
                patientEmail: data.patientEmail,
                patientPhone: data.patientPhone,
                date: data.date,
                time: data.time,
                timezone: data.timezone,
                consultationType: data.consultationType,
                duration: data.duration || 30,
                fee: data.fee,
                currency: data.currency,
                status: BookingStatus.PENDING,
                platform: 'Secure HD Video',
                medicalHistory: data.medicalHistory,
                notes: data.notes,
            },
        });
        return this.mapConsultationToType(consultation);
    }

    async findAll(filters?: {
        doctorId?: string;
        patientEmail?: string;
        status?: BookingStatus;
    }): Promise<Consultation[]> {
        const where: any = {};
        if (filters?.doctorId) where.doctorId = filters.doctorId;
        if (filters?.patientEmail) where.patientEmail = filters.patientEmail;
        if (filters?.status) where.status = filters.status;

        const consultations = await this.prisma.consultation.findMany({ where });
        return consultations.map(this.mapConsultationToType);
    }

    async findOne(id: string): Promise<Consultation | null> {
        const consultation = await this.prisma.consultation.findUnique({
            where: { id },
        });
        return consultation ? this.mapConsultationToType(consultation) : null;
    }

    async findByDoctor(doctorId: string): Promise<Consultation[]> {
        const consultations = await this.prisma.consultation.findMany({
            where: { doctorId },
        });
        return consultations.map(this.mapConsultationToType);
    }

    async findByPatient(email: string): Promise<Consultation[]> {
        const consultations = await this.prisma.consultation.findMany({
            where: { patientEmail: email },
        });
        return consultations.map(this.mapConsultationToType);
    }

    async updateStatus(id: string, status: BookingStatus): Promise<Consultation | null> {
        try {
            const consultation = await this.prisma.consultation.update({
                where: { id },
                data: { status },
            });
            return this.mapConsultationToType(consultation);
        } catch (error) {
            return null;
        }
    }

    async cancelConsultation(id: string): Promise<Consultation | null> {
        return this.updateStatus(id, BookingStatus.CANCELLED);
    }

    async isSlotBooked(doctorId: string, date: string, time: string): Promise<boolean> {
        const count = await this.prisma.consultation.count({
            where: {
                doctorId,
                date,
                time,
                status: { not: BookingStatus.CANCELLED },
            },
        });
        return count > 0;
    }

    private mapConsultationToType(consultation: any): Consultation {
        return {
            ...consultation,
            // Prisma stores ENUMs as strings by default or actual enums. 
            // My schema defined consultationType and status as Strings? Let's check schema.
            // Step 545 schema: status String, consultationType String.
            // So simple casting or mapping is fine.
            status: consultation.status as BookingStatus,
            consultationType: consultation.consultationType as ConsultationType,
            createdAt: consultation.createdAt.toISOString(),
            updatedAt: consultation.updatedAt.toISOString(),
        };
    }
}
