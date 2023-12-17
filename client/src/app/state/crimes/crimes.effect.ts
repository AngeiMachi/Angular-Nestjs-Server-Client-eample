import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { CrimesService } from '../../services/crimes.service';
import { createCrime, createCrimeFailure, createCrimeSuccess, editCrime, editCrimeFailure, editCrimeSuccess, loadCrimes, loadCrimesFailure, loadCrimesSuccess } from './crimes.actions';
import { of } from 'rxjs';
import { Crime } from '../../models/models';

@Injectable()
export class CrimesEffect {

  loadCrimes$ = createEffect(() => this.actions$.pipe(
      ofType(loadCrimes),
      mergeMap(() => this.crimesService.getCrimes()
        .pipe(
          map(crimes => {
            return (loadCrimesSuccess({result: crimes}))
          }),
          catchError((error) => of(loadCrimesFailure()))
        ))
    )
  );

  createCrime$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCrime),
      mergeMap(({ crime }) =>
        this.crimesService.createCrime(crime).pipe(
          map(newCrime => createCrimeSuccess({ crime: newCrime as Crime })),
          catchError(error => of(createCrimeFailure({ error })))
        )
      ),
      tap(
        () => {
          alert('Crime created successfully');
        },
        (error) => {
          alert('Failed to create crime'); 
        }
      )
    )
  );

  editCrime$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editCrime),
      mergeMap(({ crime }) =>
        this.crimesService.updateCrime(crime).pipe(
          map(updatedCrime => editCrimeSuccess({  updatedCrime: updatedCrime as Crime })),
          catchError(error => of(editCrimeFailure({ error })))
        )
      ),
      
      tap(
        () => {
          alert('Crime updated successfully');
        },
        (error) => {
          alert('Failed to update crime'); 
        }
      )
    )
  );
  
  constructor(
    private actions$: Actions,
    private crimesService: CrimesService,
  ) {}
}
