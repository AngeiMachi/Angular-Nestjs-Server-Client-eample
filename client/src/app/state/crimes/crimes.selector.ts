import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Crime } from "../../models/models";

export interface CrimesState {
  crimeList: Crime[]
}

export const selectCrimesState = createFeatureSelector<CrimesState>('crimes');
export const selectCrimesList = createSelector(
  selectCrimesState,
  (state: CrimesState) => state.crimeList 
);