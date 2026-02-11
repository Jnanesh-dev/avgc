
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Destination } from '../types';

@Injectable()
export class DestinationsService {
    constructor(private prisma: PrismaService) { }

    async findAll(): Promise<Destination[]> {
        const destinations = await this.prisma.destination.findMany();
        return destinations.map(this.mapDestinationToType);
    }

    async findOne(id: string): Promise<Destination | null> {
        const destination = await this.prisma.destination.findUnique({
            where: { id },
        });
        return destination ? this.mapDestinationToType(destination) : null;
    }

    async findBySlug(slug: string): Promise<Destination | null> {
        const destination = await this.prisma.destination.findUnique({
            where: { slug },
        });
        return destination ? this.mapDestinationToType(destination) : null;
    }

    async search(query: string): Promise<Destination[]> {
        const destinations = await this.prisma.destination.findMany({
            where: {
                OR: [
                    { name: { contains: query } },
                    { country: { contains: query } },
                    { description: { contains: query } },
                ],
            },
        });
        return destinations.map(this.mapDestinationToType);
    }

    private mapDestinationToType(destination: any): Destination {
        return {
            ...destination,
            popularTreatments: JSON.parse(destination.popularTreatments || '[]'),
            averageCost: {
                flightPrice: destination.flightPrice,
                hotelPrice: destination.hotelPrice,
                currency: destination.currency,
            },
        };
    }
}
