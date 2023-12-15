import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CrimesService } from '../../services/crimes.service';
import { LoadCrimes, LoadCrimesFailure, LoadCrimesSuccess } from './crimes.actions';

@Injectable()
export class CatalogEffect {

  loadArticles$ = createEffect(() => this.actions$.pipe(
      ofType(LoadCrimes),
      mergeMap(() => this.crimesService.getCrimes()
        .pipe(
          map(crimes => (LoadCrimesSuccess({result: crimes}))),
          catchError((error) => of(LoadCrimesFailure()))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private crimesService: CrimesService
  ) {}
}
