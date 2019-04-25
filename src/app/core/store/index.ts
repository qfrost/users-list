import { createSelector } from 'reselect';
import { createFeatureSelector } from '@ngrx/store';

import * as fromApp from './app.reducer';
import { AppModel } from '../models/app.model';

export interface AppState {
    app: fromApp.State;
}

export const appReducers: any = {
    app: fromApp.reducer
};

// APP
export const getAppState = createFeatureSelector<fromApp.State>('app');

export const getUsers = createSelector(
    getAppState,
    (state: fromApp.State) => state.users
);

export const getUsersLoaded = createSelector(getAppState, (state: fromApp.State) => state.is_loaded);

export const getSelectedId = createSelector(getAppState, (state: fromApp.State) => state.selectedId);

export const getUserById = createSelector(getUsers, getSelectedId, (users, id) => {
    const result = users.find(it => it.id === id);
    return result ? Object.assign({}, result) : undefined;
});
