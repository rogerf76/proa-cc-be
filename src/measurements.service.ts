import { Injectable } from '@nestjs/common';

import { sql } from '@vercel/postgres';

export interface MeasurementRecord {
    id: number;
    property_id: number;
    variable_name: string;
    value: number;
    timestamp: Date;
}

@Injectable()
export class MeasurementsService {
    async getLatestMeasurements(propertyId: number): Promise<MeasurementRecord[]> {
        // Query will find the latest measurement for the property
        // then return all rows for that property with the same timestamp
        const result = await sql`
            SELECT *
            FROM measurements
            WHERE property_id = ${propertyId}
            AND timestamp = (
                SELECT MAX(timestamp)
                FROM measurements
                WHERE property_id = ${propertyId}
            );
        `;

        return result.rows.map(row => ({
            id: row.id,
            property_id: row.property_id,
            variable_name: row.variable_name,
            value: row.value,
            timestamp: row.timestamp
        }));
    }
}

