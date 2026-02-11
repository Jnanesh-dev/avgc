import { Controller, Get, Param } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
    constructor(private readonly dashboardService: DashboardService) { }

    @Get(':patientId')
    getCompleteDashboard(@Param('patientId') patientId: string) {
        return this.dashboardService.getCompleteDashboard(patientId);
    }

    @Get(':patientId/profile')
    getPatientProfile(@Param('patientId') patientId: string) {
        return this.dashboardService.getPatientProfile(patientId);
    }

    @Get(':patientId/journey')
    getMedicalJourney(@Param('patientId') patientId: string) {
        return this.dashboardService.getMedicalJourney(patientId);
    }

    @Get(':patientId/documents')
    getDocuments(@Param('patientId') patientId: string) {
        return this.dashboardService.getDocuments(patientId);
    }

    @Get(':patientId/team')
    getCareTeam(@Param('patientId') patientId: string) {
        return this.dashboardService.getCareTeam(patientId);
    }

    @Get(':patientId/consultations')
    getUpcomingConsultations(@Param('patientId') patientId: string) {
        return this.dashboardService.getUpcomingConsultations(patientId);
    }
}
