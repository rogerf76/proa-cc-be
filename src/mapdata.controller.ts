import { Controller, Get, Query } from '@nestjs/common';
import { MapdataService, PropertyLocationRecord } from './mapdata.service';

@Controller('mapdata')
export class MapdataController {
    constructor(private readonly mapdataService: MapdataService) { }

    @Get()
    async getProperties(@Query('state') state?: string): Promise<PropertyLocationRecord[]> {
        return this.mapdataService.getProperties(state);
    }
}
