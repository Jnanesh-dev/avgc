import { Controller, Get, Post, Patch, Param, Body, Query } from '@nestjs/common';
import { RecoveryService } from './recovery.service';

@Controller('recovery')
export class RecoveryController {
    constructor(private readonly recoveryService: RecoveryService) { }

    @Get(':patientId/status')
    getRecoveryStatus(@Param('patientId') patientId: string) {
        return this.recoveryService.getRecoveryStatus(patientId);
    }

    @Get(':patientId/vitals')
    getVitalSigns(@Param('patientId') patientId: string) {
        return this.recoveryService.getVitalSigns(patientId);
    }

    @Post(':patientId/vitals')
    updateVitalSigns(
        @Param('patientId') patientId: string,
        @Body() vitalData: any,
    ) {
        return this.recoveryService.updateVitalSigns(patientId, vitalData);
    }

    @Get(':patientId/medications')
    getMedicationSchedule(@Param('patientId') patientId: string) {
        return this.recoveryService.getMedicationSchedule(patientId);
    }

    @Patch(':patientId/medications/:medicationId')
    toggleMedication(
        @Param('patientId') patientId: string,
        @Param('medicationId') medicationId: string,
    ) {
        return this.recoveryService.toggleMedicationCompletion(
            patientId,
            medicationId,
        );
    }

    @Get(':patientId/symptoms')
    getSymptomLogs(@Param('patientId') patientId: string) {
        return this.recoveryService.getSymptomLogs(patientId);
    }

    @Post(':patientId/symptoms')
    logSymptom(@Param('patientId') patientId: string, @Body() symptomData: any) {
        return this.recoveryService.logSymptom(patientId, symptomData);
    }

    @Get(':patientId/trends')
    getRecoveryTrends(
        @Param('patientId') patientId: string,
        @Query('period') period?: 'week' | 'month',
    ) {
        return this.recoveryService.getRecoveryTrends(patientId, period);
    }

    @Get(':patientId/emergency-indicators')
    getEmergencyIndicators(@Param('patientId') patientId: string) {
        return this.recoveryService.getEmergencyIndicators(patientId);
    }
}
