/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Crimes } from './models';
import * as fs from 'fs';

@Injectable()
export class CrimesService {
    private crimes: Array<Crimes>;
    constructor() {
      this.crimes = JSON.parse(fs.readFileSync('./src/crimes.json', 'utf8')); 
    }
    getCrimes(): Crimes[] {
      return this.crimes;
    }
    createCrime(name: string,color:string): Crimes[] {
      const crime = { id: this.crimes.length + 1, name,color,
                    createDate:new Date(),LastUpdate:new Date(),CreatedBy:"Natanel Malca"};
      this.crimes = [...this.crimes, { ...crime}];
      fs.writeFileSync('tasks.json', JSON.stringify(this.crimes));
      return this.crimes;
    }
    deleteCrime(id: number): Crimes[] {
      const index = this.crimes.findIndex((task) => task.id === id);
      this.crimes.splice(index, 1);
      return this.crimes;
    }
 }
