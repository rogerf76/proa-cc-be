import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MapdataController } from './mapdata.controller';
import { MapdataService } from './mapdata.service';
import { MeasurementsController } from './measurements.controller';
import { MeasurementsService } from './measurements.service';

import { config } from 'dotenv';

// Load Environment Variables
config({
    path: ['.env', '.env.production', '.env.local'],
});

@Module({
    imports: [],
    controllers: [AppController, MapdataController, MeasurementsController],
    providers: [AppService, MapdataService, MeasurementsService],
})
export class AppModule { }
