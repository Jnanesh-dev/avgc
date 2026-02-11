import { Controller, Get, Param, Query } from '@nestjs/common';
import { HospitalsService } from './hospitals.service';

@Controller('hospitals')
export class HospitalsController {
    constructor(private readonly hospitalsService: HospitalsService) { }

    @Get()
    findAll(@Query('country') country?: string) {
        if (country) {
            return this.hospitalsService.findByCountry(country);
        }
        return this.hospitalsService.findAll();
    }

    @Get('search')
    search(@Query('q') query: string) {
        if (!query) {
            return this.hospitalsService.findAll();
        }
        return this.hospitalsService.search(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.hospitalsService.findOne(id);
    }
}
