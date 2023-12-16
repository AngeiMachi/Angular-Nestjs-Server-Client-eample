import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Crimes } from "../../models/models";

export interface CrimesState {
  crimeList: Crimes[]
}

export const selectCrimesState = createFeatureSelector<CrimesState>('crimes');
export const selectCrimesList = createSelector(
  selectCrimesState,
  (state: CrimesState) => state.crimeList 
);