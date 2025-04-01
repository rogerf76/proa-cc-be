import { Injectable } from '@nestjs/common';
import { sql } from '@vercel/postgres';

export interface VariableRecord {
    id: number;
    variable_id: number;
    variable_name: string;
    long_name: string;
    unit: string;
}

@Injectable()
export class VariablesService {
    async getAllVariables(): Promise<VariableRecord[]> {
        const result = await sql`
            SELECT *
            FROM variables
            ORDER BY variable_id;
        `;

        return result.rows.map(row => ({
            id: row.id,
            variable_id: row.variable_id,
            variable_name: row.variable_name,
            long_name: row.long_name,
            unit: row.unit
        }));
    }
} 