import { Action } from '@ngrx/store';
import { AppModel } from '../models/app.model';

export const LOAD_USERS = '[App] LOAD USERS';
export const SELECT_USER = '[App] SELECT USER';

export class SelectUser implements Action {
    public readonly type = SELECT_USER;
    constructor(public payload: number) {}
}

export class LoadUsers implements Action {
    public readonly type = LOAD_USERS;
    constructor(public payload: AppModel.IUser[]) {}
}

export type AppAction = SelectUser | LoadUsers;

