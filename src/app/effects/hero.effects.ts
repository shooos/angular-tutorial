import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {Actions, Effect} from '@ngrx/effects';

import * as HeroAction from '../actions/hero.action';
import {HeroService} from '../hero.service';
import {concatMap, map, catchError, mergeMap, tap} from 'rxjs/operators';

@Injectable()
export class HeroEffects {
  constructor(private actions$: Actions, private heroService: HeroService) {}

  @Effect()
  get$: Observable<Action> = this.actions$.ofType(HeroAction.GET).pipe(
    map((action: HeroAction.Get) => action.payload),
    mergeMap(payload =>
      this.heroService.getHero(payload).pipe(
        map(data => new HeroAction.GetSuccess(data)),
        catchError(error => of(new HeroAction.GetFailre(error)))
      )
    )
  );

  @Effect()
  list$: Observable<Action> = this.actions$.ofType(HeroAction.LIST).pipe(
    tap(arg => console.log(arg)),
    mergeMap(() =>
      this.heroService.getHeroes().pipe(
        tap(data => console.log(data)),
        map(data => new HeroAction.ListSuccess(data)),
        catchError(error => of(new HeroAction.ListFailure(error)))
      )
    )
  );

  @Effect()
  create$: Observable<Action> = this.actions$.ofType(HeroAction.CREATE).pipe(
    map((action: HeroAction.Create) => action.payload),
    concatMap(payload =>
      this.heroService.addHero(payload).pipe(
        map(data => new HeroAction.CreateSuccess(data)),
        catchError(error => of(new HeroAction.CreateFailure(error)))
      )
    )
  );

  @Effect()
  remove$: Observable<Action> = this.actions$.ofType(HeroAction.REMOVE).pipe(
    map((action: HeroAction.Remove) => action.payload),
    concatMap(payload =>
      this.heroService.deleteHero(payload).pipe(
        map(data => new HeroAction.RemoveSuccess(data)),
        catchError(error => of(new HeroAction.RemoveFailure(error)))
      )
    )
  );

  @Effect()
  update$: Observable<Action> = this.actions$.ofType(HeroAction.UPDATE).pipe(
    map((action: HeroAction.Update) => action.payload),
    concatMap(payload =>
      this.heroService.updateHero(payload).pipe(
        map(data => new HeroAction.UpdateSuccess(data)),
        catchError(error => of(new HeroAction.UpdateFailure(error)))
      )
    )
  );
}
