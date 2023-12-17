import { Crime as Crime } from './models';
export declare class CrimesService {
    private crimes;
    constructor();
    getCrimes(): Crime[];
    createCrime(crime: Crime): Crime;
    updateCrime(crime: Crime): Crime;
}
