import { createAction, props } from "@ngrx/store";
import { Crimes } from "../../models/models";

export const LoadCrimes  = createAction('[Crimes] Load Crimes');
export const LoadCrimesSuccess = createAction('[Crimes] Load Crimes Success', props<{ result: Crimes[] }>());
export const LoadCrimesFailure = createAction('[Crimes] Load Crimes Failure');
  
 