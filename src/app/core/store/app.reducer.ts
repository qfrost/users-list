import { LOAD_USERS, SELECT_USER, LoadUsers, SelectUser } from './app.action';
import { AppModel } from '../models/app.model';

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

export function reducer(state: State = initialState, action: SelectUser | LoadUsers): State {

    switch (action.type) {

        case SELECT_USER: {
            return {
                ...state,
                selectedId: action.payload
            };
        }

        case LOAD_USERS: {
            return {
                ...state,
                users: action.payload,
                is_loaded: true
            };
        }

        default:
            return state;

    }
}
