import {Hero} from '../models/hero';
import * as HeroActions from '../actions/hero.action';

export interface State {
  loading: boolean;
  heroes: Hero[];
}

const initialState: State = {
  loading: false,
  heroes: [],
};

export function reducer(state = initialState, action: HeroActions.Actions) {
  switch (action.type) {
    case HeroActions.GET:
    case HeroActions.LIST:
    case HeroActions.CREATE:
    case HeroActions.REMOVE:
    case HeroActions.UPDATE:
      return Object.assign({}, state, {loading: true});

    case HeroActions.LIST_SUCCESS:
      return Object.assign({
        loading: false,
        heroes: action.payload,
      });

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

    default:
      return state;
  }
}
