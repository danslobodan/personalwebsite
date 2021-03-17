import { User } from '../../models/User';
import { AuthActionType } from '../action-types';

interface AuthSignOutAction {
    type: AuthActionType.SIGN_OUT;
}

interface AuthCurrentUser {
    type: AuthActionType.GET_CURRENT_USER;
    payload: User;
}

export type AuthAction = AuthSignOutAction | AuthCurrentUser;
