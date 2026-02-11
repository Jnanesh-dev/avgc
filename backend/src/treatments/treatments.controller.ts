import { Controller, Get, Param, Query } from '@nestjs/common';
import { TreatmentsService } from './treatments.service';

@Controller('treatments')
export class TreatmentsController {
    constructor(private readonly treatmentsService: TreatmentsService) { }

    @Get()
    findAll() {
        return this.treatmentsService.findAll();
    }

    @Get('search')
    search(@Query('q') query: string) {
        if (!query) {
            return this.treatmentsService.findAll();
        }
        return this.treatmentsService.search(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.treatmentsService.findOne(id);
    }
}
