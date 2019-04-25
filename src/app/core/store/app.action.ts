import { createAction, props, union } from '@ngrx/store';
import { AppModel } from '../models/app.model';

export const loadUsers = createAction(
    '[App] Load Users'
);

export const loadUsersSuccess = createAction(
    '[App] Load Users Succes',
    props<{ users: AppModel.IUser[] }>()
);

export const selectUser = createAction(
    '[App] Select User',
    props<{ id: number }>()
);

const all = union({ loadUsers, loadUsersSuccess, selectUser });
export type AppActionUnion = typeof all;
