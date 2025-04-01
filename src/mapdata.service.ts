import { Injectable } from '@nestjs/common';

import { sql } from '@vercel/postgres';

export interface PropertyLocationRecord {
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
    async getProperties(state?: string): Promise<PropertyLocationRecord[]> {
        var result;
        // There is probably a neater way to do this but out of time
        if (state) {
            result = await sql`
            SELECT 
                id,
                ws_name,
                site,
                portfolio,
                state,
                latitude,
                longitude
            FROM property_locations
            WHERE state = ${state}
        `;
        } else {
            result = await sql`
            SELECT 
                id,
                ws_name,
                site,
                portfolio,
                state,
                latitude,
                longitude
            FROM property_locations
        `;
        }

        return result.rows.map(row => ({
            id: row.id,
            ws_name: row.ws_name,
            site: row.site,
            portfolio: row.portfolio,
            state: row.state,
            latitude: row.latitude,
            longitude: row.longitude
        }));
    }
}
