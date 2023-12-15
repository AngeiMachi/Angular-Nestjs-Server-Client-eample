import { CrimesService } from './crimes.service';
import { Crimes } from './models';
export declare class CrimesController {
    private readonly crimesService;
    constructor(crimesService: CrimesService);
    getTodos(): Crimes[];
}
