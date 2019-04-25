// import { LOAD_USERS, SELECT_USER, LoadUsers, SelectUser } from './app.action';
import { AppModel } from '../models/app.model';
import { loadUsers, selectUser, AppActionUnion, loadUsersSuccess } from './app.action';

export interface State {
    users: AppModel.IUser[];
    is_loaded: boolean;
    selectedId: number;
}

const initialState: State = {
    users: [],
    is_loaded: false,
    selectedId: null
};

export function reducer(state: State = initialState, action: AppActionUnion): State {

    switch (action.type) {

        case loadUsersSuccess.type: {
            return {
                ...state,
                users: action.users,
                is_loaded: true
            };
        }

        case selectUser.type: {
            return {
                ...state,
                selectedId: action.id
            };
        }

        default:
            return state;

    }
}
