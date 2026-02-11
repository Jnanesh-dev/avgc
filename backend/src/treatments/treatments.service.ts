
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Treatment } from '../types';

@Injectable()
export class TreatmentsService {
    constructor(private prisma: PrismaService) { }

    async findAll(): Promise<Treatment[]> {
        const treatments = await this.prisma.treatment.findMany();
        return treatments.map(this.mapTreatmentToType);
    }

    async findOne(id: string): Promise<Treatment | null> {
        const treatment = await this.prisma.treatment.findUnique({
            where: { id },
        });
        return treatment ? this.mapTreatmentToType(treatment) : null;
    }

    async findBySlug(slug: string): Promise<Treatment | null> {
        const treatment = await this.prisma.treatment.findUnique({
            where: { slug },
        });
        return treatment ? this.mapTreatmentToType(treatment) : null;
    }

    async search(query: string): Promise<Treatment[]> {
        const treatments = await this.prisma.treatment.findMany({
            where: {
                OR: [
                    { name: { contains: query } },
                    { category: { contains: query } },
                    { description: { contains: query } },
                ],
            },
        });
        return treatments.map(this.mapTreatmentToType);
    }

    private mapTreatmentToType(treatment: any): Treatment {
        return {
            ...treatment,
            popularDestinations: JSON.parse(treatment.popularDestinations || '[]'),
        };
    }
}
