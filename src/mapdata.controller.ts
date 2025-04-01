import { Controller, Get } from '@nestjs/common';
import { MapdataService, PropertyLocationRecord } from './mapdata.service';

import { sql } from '@vercel/postgres';


@Controller('mapdata')
export class MapdataController {
    constructor(private readonly mapdataService: MapdataService) { }

    @Get()
    async getProperties(): Promise<PropertyLocationRecord[]> {
        return this.mapdataService.getProperties();
    }
}
