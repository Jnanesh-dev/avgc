import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Doctor } from '../types';

@Injectable()
export class DoctorsService {
    constructor(private prisma: PrismaService) { }

    async findAll(): Promise<Doctor[]> {
        const doctors = await this.prisma.doctor.findMany();
        return doctors.map(this.mapDoctorToType);
    }

    async findOne(id: string): Promise<Doctor | null> {
        const doctor = await this.prisma.doctor.findUnique({
            where: { id },
        });
        return doctor ? this.mapDoctorToType(doctor) : null;
    }

    async findBySlug(slug: string): Promise<Doctor | null> {
        const doctor = await this.prisma.doctor.findUnique({
            where: { slug },
        });
        return doctor ? this.mapDoctorToType(doctor) : null;
    }

    async findByHospital(hospitalId: string): Promise<Doctor[]> {
        const doctors = await this.prisma.doctor.findMany({
            where: { hospitalId },
        });
        return doctors.map(this.mapDoctorToType);
    }

    async findBySpecialization(specialization: string): Promise<Doctor[]> {
        const doctors = await this.prisma.doctor.findMany({
            where: { specialization: { contains: specialization } }, // Loose match
        });
        return doctors.map(this.mapDoctorToType);
    }

    async search(query: string): Promise<Doctor[]> {
        const doctors = await this.prisma.doctor.findMany({
            where: {
                OR: [
                    { name: { contains: query } }, // Case-insensitive in SQLite usually needs handling but basic contains works
                    { specialization: { contains: query } },
                ],
            },
        });
        return doctors.map(this.mapDoctorToType);
    }

    private mapDoctorToType(doctor: any): Doctor {
        // Parse JSON fields
        return {
            ...doctor,
            qualifications: JSON.parse(doctor.qualifications || '[]'),
            languages: JSON.parse(doctor.languages || '[]'),
            availableDays: JSON.parse(doctor.availableDays || '[]'),
        };
    }
}
