import { Controller, Get, Param, Query } from '@nestjs/common';
import { AvailabilityService } from './availability.service';

@Controller('availability')
export class AvailabilityController {
    constructor(private readonly availabilityService: AvailabilityService) { }

    @Get(':doctorId')
    getAvailability(
        @Param('doctorId') doctorId: string,
        @Query('date') date: string,
        @Query('grouped') grouped?: string,
    ) {
        if (!date) {
            return { error: 'Date query parameter is required' };
        }

        if (grouped === 'true') {
            return this.availabilityService.getGroupedSlots(doctorId, date);
        }

        return this.availabilityService.getAvailableSlots(doctorId, date);
    }
}
