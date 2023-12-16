import { createReducer, on } from '@ngrx/store';
import { CrimesState } from './crimes.selector';
import { LoadCrimesSuccess } from './crimes.actions';
import { Crimes } from '../../models/models';

export const crimesState: CrimesState = {
  crimeList:[]
};

export const crimesReducer = createReducer(
  crimesState,
  on(LoadCrimesSuccess, (store:CrimesState,action) => {
    return {
      ...store,
      crimeList: action.result
     }
  })
);
