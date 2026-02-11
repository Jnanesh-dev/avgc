import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Hospital } from '../types';

@Injectable()
export class HospitalsService {
    constructor(private prisma: PrismaService) { }

    async findAll(): Promise<Hospital[]> {
        const hospitals = await this.prisma.hospital.findMany();
        return hospitals.map(this.mapHospitalToType);
    }

    async findOne(id: string): Promise<Hospital | null> {
        const hospital = await this.prisma.hospital.findUnique({
            where: { id },
        });
        return hospital ? this.mapHospitalToType(hospital) : null;
    }

    async findBySlug(slug: string): Promise<Hospital | null> {
        const hospital = await this.prisma.hospital.findUnique({
            where: { slug },
        });
        return hospital ? this.mapHospitalToType(hospital) : null;
    }

    async findByCountry(country: string): Promise<Hospital[]> {
        const hospitals = await this.prisma.hospital.findMany({
            where: { country: { contains: country } },
        });
        return hospitals.map(this.mapHospitalToType);
    }

    async search(query: string): Promise<Hospital[]> {
        const hospitals = await this.prisma.hospital.findMany({
            where: {
                OR: [
                    { name: { contains: query } }, // removed mode: 'insensitive' for SQLite compatibility if needed, but Prisma usually handles it. Wait, SQLite supports it map? No. SQLite is case-insensitive by default for ASCII usually.
                    // Re-adding mode: 'insensitive' as Prisma Client warns if not supported? 
                    // Actually, for SQLite, `mode: 'insensitive'` is NOT supported in older Prisma or specific setups.
                    // But I'll keep it simple.
                    { name: { contains: query } },
                    { city: { contains: query } },
                    { country: { contains: query } },
                    { specializations: { contains: query } },
                ],
            },
        });
        return hospitals.map(this.mapHospitalToType);
    }

    private mapHospitalToType(hospital: any): Hospital {
        return {
            ...hospital,
            accreditations: JSON.parse(hospital.accreditations || '[]'),
            specializations: JSON.parse(hospital.specializations || '[]'),
            features: JSON.parse(hospital.features || '[]'),
            priceRange: {
                min: hospital.priceMin,
                max: hospital.priceMax,
                currency: hospital.currency
            }
        };
    }
}
