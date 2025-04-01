import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MapdataController } from './mapdata.controller';
import { MapdataService } from './mapdata.service';

import { config } from 'dotenv';

// Load Environment Variables
config({
    path: ['.env', '.env.production', '.env.local'],
});

@Module({
    imports: [],
    controllers: [AppController, MapdataController],
    providers: [AppService, MapdataService],
})
export class AppModule { }
