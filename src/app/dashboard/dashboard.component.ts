import {Component, OnInit, OnDestroy, EventEmitter} from '@angular/core';
import {Hero} from '../models/hero';
import {Store} from '@ngrx/store';
import * as fromHero from '../reducers/hero.reducer';
import * as HeroAction from '../actions/hero.action';
import {Actions, ofType} from '@ngrx/effects';
import {Observable} from '../../../node_modules/rxjs';
import {takeUntil} from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  loading$: Observable<boolean>;
  heroes$: Observable<Hero[]>;
  heroes: Hero[];
  private readonly onDestroy$ = new EventEmitter();

  constructor(private store: Store<fromHero.State>, private actions$: Actions) {
    this.heroes$ = this.store.select(state => state.heroes);
  }

  ngOnInit() {
    this.actions$
      .pipe(
        takeUntil(this.onDestroy$),
        ofType(HeroAction.LIST_SUCCESS)
      )
      .subscribe((action: HeroAction.ListSuccess) => {
        console.log('success: ', action.payload);
      });

    this.actions$
      .pipe(
        takeUntil(this.onDestroy$),
        ofType(HeroAction.LIST_FAILURE)
      )
      .subscribe(action => {
        console.log(action);
      });

    this.getHeroes();
  }

  getHeroes(): void {
    this.store.dispatch(new HeroAction.List());
  }

  ngOnDestroy() {
    this.onDestroy$.emit();
  }
}
