import { Controller, Get, Param, Query } from '@nestjs/common';
import { DestinationsService } from './destinations.service';

@Controller('destinations')
export class DestinationsController {
    constructor(private readonly destinationsService: DestinationsService) { }

    @Get()
    findAll() {
        return this.destinationsService.findAll();
    }

    @Get('search')
    search(@Query('q') query: string) {
        if (!query) {
            return this.destinationsService.findAll();
        }
        return this.destinationsService.search(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.destinationsService.findOne(id);
    }
}
