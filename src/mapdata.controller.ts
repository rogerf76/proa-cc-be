import { Controller, Get } from '@nestjs/common';
import { MapdataService, PropertyLocation } from './mapdata.service';

@Controller('mapdata')
export class MapdataController {
  constructor(private readonly mapdataService: MapdataService) {}

  @Get()
  getProperties(): PropertyLocation[] {
    return this.mapdataService.getProperties();
  }
}
