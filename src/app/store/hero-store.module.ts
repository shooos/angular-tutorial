import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HeroEffects} from '../effects/hero.effects';
import {reducer} from '../reducers';

@NgModule({
  imports: [StoreModule.forFeature('Hero', reducer), EffectsModule.forFeature([HeroEffects])],
})
export class HeroStoreModule {}
