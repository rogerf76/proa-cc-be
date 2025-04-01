import { Controller, Get } from '@nestjs/common';
import { MapdataService, PropertyLocationRecord } from './mapdata.service';


@Controller('mapdata')
export class MapdataController {
    constructor(private readonly mapdataService: MapdataService) { }

    @Get()
    async getProperties(): Promise<PropertyLocationRecord[]> {
        return this.mapdataService.getProperties();
    }
}
