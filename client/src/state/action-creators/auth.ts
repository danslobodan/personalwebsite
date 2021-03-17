import { AuthActionType } from '../action-types';
import api from '../../apis/api';
import { AuthAction } from '../actions';
import { Dispatch } from 'redux';

export const signOut = () => async (dispatch: Dispatch<AuthAction>) => {
    await api.post('/auth/signout');
    dispatch({
        type: AuthActionType.SIGN_OUT,
    });
};

export const getCurrentUser = () => async (dispatch: Dispatch<AuthAction>) => {
    const response = await api.get('/auth/currentuser');
    dispatch({
        type: AuthActionType.GET_CURRENT_USER,
        payload: response.data,
    });
};
