import {Hero} from '../models/hero';
import * as HeroActions from '../actions/hero.action';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface State {
  loading: boolean;
  hero?: Hero;
  heroes?: Hero[];
}

const initialState: State = {
  loading: false,
  hero: null,
  heroes: null,
};

export function reducer(state = initialState, action: HeroActions.Actions) {
  switch (action.type) {
    case HeroActions.GET:
    case HeroActions.LIST:
    case HeroActions.CREATE:
    case HeroActions.REMOVE:
    case HeroActions.UPDATE:
      return Object.assign({}, state, {loading: true});

    case HeroActions.GET_SUCCESS:
      return {
        loading: false,
        hero: action.payload,
      };

    case HeroActions.LIST_SUCCESS:
      return {
        loading: false,
        heroes: action.payload,
      };

    case HeroActions.CREATE_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        heroes: [...state.heroes, action.payload],
      });

    case HeroActions.REMOVE_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        heroes: state.heroes.filter(hero => hero !== action.payload),
      });

    case HeroActions.UPDATE_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        heroes: state.heroes.map(hero => (hero.id === action.payload.id ? Object.assign({}, action.payload) : hero)),
      });

    case HeroActions.GET_FAILURE:
    case HeroActions.LIST_FAILURE:
    case HeroActions.CREATE_FAILURE:
    case HeroActions.REMOVE_FAILURE:
    case HeroActions.UPDATE_FAILURE:
      return Object.assign({}, state, {
        loading: false,
      });

    default:
      return state;
  }
}
