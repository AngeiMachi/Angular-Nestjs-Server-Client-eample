import { Crimes } from './models';
export declare class CrimesService {
    private crimes;
    constructor();
    getCrimes(): Crimes[];
    createCrime(name: string, color: string): Crimes[];
    deleteCrime(id: number): Crimes[];
}
