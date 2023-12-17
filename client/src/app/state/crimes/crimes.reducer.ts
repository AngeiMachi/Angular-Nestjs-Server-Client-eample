import { createReducer, on } from '@ngrx/store';
import { CrimesState } from './crimes.selector';
import { createCrimeSuccess, editCrimeSuccess, loadCrimesSuccess } from './crimes.actions';
import { Crime } from '../../models/models';

export const crimesState: CrimesState = {
  crimeList:[]
};

export const crimesReducer = createReducer(
  crimesState,
  on(loadCrimesSuccess, (store:CrimesState,action) => {
    return {
      ...store,
      crimeList: action.result
     }
  }),
  on(createCrimeSuccess, (state, { crime }) => ({
    ...state,
    crimeList: [...state.crimeList, crime]
  })),
  on(editCrimeSuccess, (state, { updatedCrime }) => ({
    ...state,
    crimeList: state.crimeList.map(crime => 
      crime.id === updatedCrime.id ? updatedCrime : crime
    )
  })),
  


  
);
