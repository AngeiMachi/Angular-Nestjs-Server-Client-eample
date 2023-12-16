/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { CrimesService } from './crimes.service';
import { Crimes } from './models';

@Controller('crimes')
export class CrimesController {
    constructor(private readonly crimesService: CrimesService) {}
    
    @Get('getCrimes')
    getTodos(): Crimes[] {
        try {
            return this.crimesService.getCrimes();
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
