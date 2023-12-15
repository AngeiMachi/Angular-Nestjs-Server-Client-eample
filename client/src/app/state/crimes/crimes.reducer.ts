import { createReducer, on } from '@ngrx/store';
import { CrimesState } from './crimes.selector';
import { LoadCrimesSuccess } from './crimes.actions';
import { Crimes } from '../../models/models';

export const initialState: CrimesState = {
  crimes:[]
};

export const catalogReducer = createReducer(
  initialState,
  on(LoadCrimesSuccess, (store:CrimesState,action) => {
    return {
      ...store,
      crimes: action.result
     }
  })
);
