import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MapdataController } from './mapdata.controller';
import { MapdataService } from './mapdata.service';
@Module({
  imports: [],
  controllers: [AppController, MapdataController],
  providers: [AppService, MapdataService],
})
export class AppModule {}
