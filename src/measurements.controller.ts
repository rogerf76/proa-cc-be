import { Controller, Get, Param } from '@nestjs/common';
import { MeasurementsService, MeasurementRecord } from './measurements.service';


@Controller('measurements')
export class MeasurementsController {
    constructor(private readonly measurementsService: MeasurementsService) { }

    @Get(':propertyId')
    async getLatestMeasurements(@Param('propertyId') propertyId: number): Promise<MeasurementRecord[]> {
        return this.measurementsService.getLatestMeasurements(propertyId);
    }
}
