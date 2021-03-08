import { AuthActionType } from '../action-types';
import { AuthAction } from '../actions';

interface AuthState {
    isSignedIn: boolean;
    isAdmin: boolean;
    userId: string | null;
}

const INITIAL_STATE = {
    isSignedIn: false,
    isAdmin: false,
    userId: null,
};

export default (state: AuthState = INITIAL_STATE, action: AuthAction) => {
    switch (action.type) {
        case AuthActionType.SIGN_IN:
            return {
                ...state,
                isSignedIn: true,
                isAdmin: true,
                userId: action.payload,
            };
        case AuthActionType.SIGN_OUT:
            return {
                ...state,
                isSignedIn: false,
                isAdmin: false,
                userId: null,
            };
        default:
            return state;
    }
};
