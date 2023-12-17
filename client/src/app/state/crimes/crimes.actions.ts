import { createAction, props } from "@ngrx/store";
import { Crime } from "../../models/models";

export const loadCrimes  = createAction('[Crimes] Load Crimes');
export const loadCrimesSuccess = createAction('[Crimes] Load Crimes Success', props<{ result: Crime[] }>());
export const loadCrimesFailure = createAction('[Crimes] Load Crimes Failure');
  
export const createCrime = createAction('[Crimes] Create Crime', props<{ crime: Crime }>());
export const createCrimeSuccess = createAction('[Crimes] Create Crime Success', props<{ crime: Crime }>());
export const createCrimeFailure = createAction('[Crimes] Create Crime Failure', props<{ error: any }>());