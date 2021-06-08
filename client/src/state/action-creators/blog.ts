import { Dispatch } from 'redux';

import { BlogActionType } from '../action-types';
import { BlogAction } from '../actions';

import api from '../../apis/api';

export const getBlogs = () => async (dispatch: Dispatch<BlogAction>) => {
    const response = await api.get('/blogs');
    dispatch({ type: BlogActionType.GET_BLOGS, payload: response.data });
};
