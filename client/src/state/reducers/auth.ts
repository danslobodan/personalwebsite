import { User } from '../../models/User';
import { AuthActionType } from '../action-types';
import { AuthAction } from '../actions';

interface AuthState {
    currentUser: User | null;
}

const INITIAL_STATE = {
    currentUser: null,
};

export default (state: AuthState = INITIAL_STATE, action: AuthAction) => {
    switch (action.type) {
        case AuthActionType.SIGN_IN:
            return {
                ...state,
                currentUser: action.payload,
            };
        case AuthActionType.GET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        case AuthActionType.SIGN_OUT:
            return {
                ...state,
                currentUser: null,
            };
        default:
            return state;
    }
};
