/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CrimesService } from './crimes.service';
import { Crime } from './models';

@Controller('crimes')
export class CrimesController {
    constructor(private readonly crimesService: CrimesService) {}
    
    @Get('getCrimes')
    getCrimes(): Crime[] {
        try {
            return this.crimesService.getCrimes();
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Post('createCrime')
    createCrime(@Body()  crime : Crime): Crime {
        try {
            return this.crimesService.createCrime(crime);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Post('updateCrime')
    updateCrime(@Body()  crime : Crime): Crime {
        try {
            return this.crimesService.updateCrime(crime);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
