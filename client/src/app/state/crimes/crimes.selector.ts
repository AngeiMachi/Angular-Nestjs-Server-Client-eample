import { createSelector } from '@ngrx/store';
import { Crimes } from "../../models/models";

export interface CrimesState {
  crimes: Crimes[]
}

export const selectCrimesState = (state: CrimesState) => state;
export const selectCrimes = createSelector(
    selectCrimesState,
    (state: CrimesState) => state.crimes 
  );

