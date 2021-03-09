import { AuthActionType } from '../action-types';

interface AuthSignInAction {
    type: AuthActionType.SIGN_IN;
    payload: string;
}

interface AuthSignOutAction {
    type: AuthActionType.SIGN_OUT;
}

export type AuthAction = AuthSignInAction | AuthSignOutAction;
