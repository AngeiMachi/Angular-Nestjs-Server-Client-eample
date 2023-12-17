/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Crime as Crime } from './models';
import * as fs from 'fs';

@Injectable()
export class CrimesService {
    private crimes: Array<Crime>;
    constructor() {
      this.crimes = JSON.parse(fs.readFileSync('./src/crimes.json', 'utf8')); 
    }
    getCrimes(): Crime[] {
      return this.crimes;
    }
    createCrime(crime:Crime): Crime {
      const newCrime = { id: this.crimes.length + 1, 
                      name:crime.name,
                      desciprtion:crime.desciprtion,
                      color:crime.color,
                      createDate:new Date(),
                      lastUpdate:new Date(),
                      createdBy:crime.createdBy
                    };
      this.crimes = [...this.crimes, { ...newCrime}];
      const dataToWrite = '['+this.crimes.map(crime => JSON.stringify(crime)).join('\n,')+']';

      fs.writeFileSync('./src/crimes.json', dataToWrite);
      return crime;
    }
    updateCrime(crime:Crime): Crime {
      const updatedCrime = { id: crime.id, 
                      name:crime.name,
                      desciprtion:crime.desciprtion,
                      color:crime.color,
                      createDate:crime.createDate,
                      lastUpdate:new Date(),
                      createdBy:crime.createdBy
                    };
      const index =this.crimes.findIndex(crime => crime.id === updatedCrime.id);
      this.crimes[index]=updatedCrime;
      const dataToWrite = '['+this.crimes.map(crime => JSON.stringify(crime)).join('\n,')+']';
      fs.writeFileSync('./src/crimes.json', dataToWrite);
      return crime;
    }
    
 }
