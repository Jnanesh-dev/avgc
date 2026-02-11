import { Module } from '@nestjs/common';
import { ConsultationsController } from './consultations.controller';
import { ConsultationsService } from './consultations.service';
import { AvailabilityController } from './availability.controller';
import { AvailabilityService } from './availability.service';

@Module({
    controllers: [ConsultationsController, AvailabilityController],
    providers: [ConsultationsService, AvailabilityService],
    exports: [ConsultationsService, AvailabilityService],
})
export class ConsultationsModule { }
