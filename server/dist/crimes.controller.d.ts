import { CrimesService } from './crimes.service';
import { Crime } from './models';
export declare class CrimesController {
    private readonly crimesService;
    constructor(crimesService: CrimesService);
    getCrimes(): Crime[];
    createCrime(crime: Crime): Crime;
}
