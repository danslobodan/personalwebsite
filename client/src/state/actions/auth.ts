import { User } from '../../models/User';
import { AuthActionType } from '../action-types';

interface AuthSignInAction {
    type: AuthActionType.SIGN_IN;
    payload: User;
}

interface AuthSignOutAction {
    type: AuthActionType.SIGN_OUT;
}

interface AuthCurrentUserAction {
    type: AuthActionType.GET_CURRENT_USER;
    payload: User;
}

export type AuthAction =
    | AuthSignInAction
    | AuthSignOutAction
    | AuthCurrentUserAction;
