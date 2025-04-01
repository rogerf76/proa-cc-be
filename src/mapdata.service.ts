import { Injectable } from '@nestjs/common';

export interface PropertyLocation {
  id: number;
  ws_name: string;
  site: string;
  portfolio: string;
  state: string;
  latitude: number;
  longitude: number;
}

@Injectable()
export class MapdataService {
  getProperties(): PropertyLocation[] {
    return [
      {
        id: 1,
        ws_name: "Cohuna North",
        site: "Cohuna Solar Farm",
        portfolio: "Enel Green Power",
        state: "VIC",
        latitude: 145.449895817713,
        longitude: 144.217208,
      }
    ];
  }
}
