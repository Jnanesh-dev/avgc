import { Injectable } from '@nestjs/common';
import { TimeSlot, DoctorAvailability } from '../types';
import { ConsultationsService } from './consultations.service';

@Injectable()
export class AvailabilityService {
    constructor(private readonly consultationsService: ConsultationsService) { }

    // Generate time slots for a given date (9 AM to 5 PM, 30-minute intervals)
    private generateTimeSlots(): string[] {
        const slots: string[] = [];
        const hours = [9, 10, 11, 12, 13, 14, 15, 16]; // 9 AM to 4:30 PM

        hours.forEach((hour) => {
            const period = hour < 12 ? 'AM' : 'PM';
            const displayHour = hour > 12 ? hour - 12 : hour;

            // On the hour
            slots.push(`${displayHour.toString().padStart(2, '0')}:00 ${period}`);
            // Half past
            slots.push(`${displayHour.toString().padStart(2, '0')}:30 ${period}`);
        });

        return slots;
    }

    getAvailableSlots(doctorId: string, date: string): DoctorAvailability {
        const allTimeSlots = this.generateTimeSlots();
        const timeSlots: TimeSlot[] = allTimeSlots.map((time) => ({
            time,
            available: !this.consultationsService.isSlotBooked(
                doctorId,
                date,
                time,
            ),
        }));

        return {
            doctorId,
            date,
            timeSlots,
        };
    }

    isSlotAvailable(doctorId: string, date: string, time: string): boolean {
        return !this.consultationsService.isSlotBooked(doctorId, date, time);
    }

    // Get grouped time slots (morning/afternoon)
    getGroupedSlots(
        doctorId: string,
        date: string,
    ): { morning: TimeSlot[]; afternoon: TimeSlot[] } {
        const availability = this.getAvailableSlots(doctorId, date);

        const morning = availability.timeSlots.filter((slot) =>
            slot.time.includes('AM'),
        );
        const afternoon = availability.timeSlots.filter((slot) =>
            slot.time.includes('PM'),
        );

        return { morning, afternoon };
    }
}
