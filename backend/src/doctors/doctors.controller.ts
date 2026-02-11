import { Controller, Get, Param, Query } from '@nestjs/common';
import { DoctorsService } from './doctors.service';

@Controller('doctors')
export class DoctorsController {
    constructor(private readonly doctorsService: DoctorsService) { }

    @Get()
    findAll(
        @Query('hospitalId') hospitalId?: string,
        @Query('specialization') specialization?: string,
    ) {
        if (hospitalId) {
            return this.doctorsService.findByHospital(hospitalId);
        }
        if (specialization) {
            return this.doctorsService.findBySpecialization(specialization);
        }
        return this.doctorsService.findAll();
    }

    @Get('search')
    search(@Query('q') query: string) {
        if (!query) {
            return this.doctorsService.findAll();
        }
        return this.doctorsService.search(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.doctorsService.findOne(id);
    }
}
