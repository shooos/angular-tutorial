import {Action} from '@ngrx/store';
import {Hero} from '../models/hero';

export const GET = '[Hero] Get';
export const GET_SUCCESS = '[Hero] Get Success';
export const GET_FAILURE = '[Hero] Get Failure';
export const LIST = '[Hero] List';
export const LIST_SUCCESS = '[Hero] List Success';
export const LIST_FAILURE = '[Hero] List Failure';
export const CREATE = '[Hero] Create';
export const CREATE_SUCCESS = '[Hero] Create Success';
export const CREATE_FAILURE = '[Hero] Create Failure';
export const REMOVE = '[Hero] Remove';
export const REMOVE_SUCCESS = '[Hero] Remove Success';
export const REMOVE_FAILURE = '[Hero] Remove Failure';
export const UPDATE = '[Hero] Update';
export const UPDATE_SUCCESS = '[Hero] Update Success';
export const UPDATE_FAILURE = '[Hero] Update Failure';

export class Get implements Action {
  readonly type = GET;
  constructor(public payload: string) {}
}

export class GetSuccess implements Action {
  readonly type = GET_SUCCESS;
  constructor(public payload: Hero) {}
}

export class GetFailre implements Action {
  readonly type = GET_FAILURE;
  constructor(public payload?: any) {}
}

export class List implements Action {
  readonly type = LIST;
  constructor() {}
}

export class ListSuccess implements Action {
  readonly type = LIST_SUCCESS;
  constructor(public payload: Hero[]) {}
}

export class ListFailure implements Action {
  readonly type = LIST_FAILURE;
  constructor(public payload?: any) {}
}

export class Create implements Action {
  readonly type = CREATE;
  constructor(public payload: Hero) {}
}

export class CreateSuccess implements Action {
  readonly type = CREATE_SUCCESS;
  constructor(public payload: Hero) {}
}

export class CreateFailure implements Action {
  readonly type = CREATE_FAILURE;
  constructor(public payload?: any) {}
}

export class Remove implements Action {
  readonly type = REMOVE;
  constructor(public payload: string) {}
}

export class RemoveSuccess implements Action {
  readonly type = REMOVE_SUCCESS;
  constructor(public payload: Hero) {}
}

export class RemoveFailure implements Action {
  readonly type = REMOVE_FAILURE;
  constructor(public payload?: any) {}
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(public payload: Hero) {}
}

export class UpdateSuccess implements Action {
  readonly type = UPDATE_SUCCESS;
  constructor(public payload: Hero) {}
}

export class UpdateFailure implements Action {
  readonly type = UPDATE_FAILURE;
  constructor(public payload?: any) {}
}

export type Actions =
  | Get
  | GetSuccess
  | GetFailre
  | List
  | ListSuccess
  | ListFailure
  | Create
  | CreateSuccess
  | CreateFailure
  | Remove
  | RemoveSuccess
  | RemoveFailure
  | Update
  | UpdateSuccess
  | UpdateFailure;
