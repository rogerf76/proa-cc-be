import { Controller, Get } from '@nestjs/common';
import { VariablesService, VariableRecord } from './variables.service';

@Controller('variables')
export class VariablesController {
    constructor(private readonly variablesService: VariablesService) {}

    @Get()
    async getAllVariables(): Promise<VariableRecord[]> {
        return this.variablesService.getAllVariables();
    }
} 