import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CrimesService } from '../../services/crimes.service';
import { LoadCrimes, LoadCrimesFailure, LoadCrimesSuccess } from './crimes.actions';
import { of } from 'rxjs';

@Injectable()
export class CrimesEffect {

  loadCrimes$ = createEffect(() => this.actions$.pipe(
      ofType(LoadCrimes),
      mergeMap(() => this.crimesService.getCrimes()
        .pipe(
          map(crimes => {
            return (LoadCrimesSuccess({result: crimes}))
          }),
          catchError((error) => of(LoadCrimesFailure()))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private crimesService: CrimesService
  ) {}
}
