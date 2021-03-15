import { AuthActionType } from '../action-types';
import api from '../../apis/api';
import { AuthAction } from '../actions';
import { Dispatch } from 'redux';

export const signIn = () => async (dispatch: Dispatch<AuthAction>) => {
    const response = await api.get('/auth/google');
    console.log('google auth', response.data);
    dispatch({
        type: AuthActionType.SIGN_IN,
        payload: response.data,
    });
};

export const signOut = () => async (dispatch: Dispatch<AuthAction>) => {
    await api.post('/auth/signout');
    dispatch({
        type: AuthActionType.SIGN_OUT,
    });
};
