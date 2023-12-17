import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CrimesService } from '../../services/crimes.service';
import { createCrime, createCrimeFailure, createCrimeSuccess, loadCrimes, loadCrimesFailure, loadCrimesSuccess } from './crimes.actions';
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
      )
    )
  );
  
  constructor(
    private actions$: Actions,
    private crimesService: CrimesService
  ) {}
}
