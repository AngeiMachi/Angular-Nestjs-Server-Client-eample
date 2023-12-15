import { CrimesService } from './crimes.service';
import { CrimesController } from './crimes.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    CrimesController, AppController],
  providers: [
    CrimesService, AppService],
})
export class AppModule { }
