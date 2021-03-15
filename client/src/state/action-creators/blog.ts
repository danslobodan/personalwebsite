import { Dispatch } from 'redux';

import { BlogActionType } from '../action-types';
import { BlogAction } from '../actions';
import { BlogFields } from '../../models/Blog';

import api from '../../apis/api';
import history from '../../history';

export const getBlogs = () => async (dispatch: Dispatch<BlogAction>) => {
    const response = await api.get('/blogs');
    dispatch({ type: BlogActionType.GET_BLOGS, payload: response.data });
};

export const getBlog = (id: string) => async (
    dispatch: Dispatch<BlogAction>
) => {
    const response = await api.get(`/blogs/${id}`);
    dispatch({ type: BlogActionType.GET_BLOG, payload: response.data });
};

export const createBlog = (formValues: BlogFields) => async (
    dispatch: Dispatch<BlogAction>
) => {
    const response = await api.post('/blogs', formValues);
    dispatch({ type: BlogActionType.CREATE_BLOG, payload: response.data });
    history.push('/blogs');
};

export const editBlog = (id: string, formValues: BlogFields) => async (
    dispatch: Dispatch<BlogAction>
) => {
    const response = await api.patch(`/blogs/${id}`, formValues);
    dispatch({ type: BlogActionType.EDIT_BLOG, payload: response.data });
    history.push('/blogs');
};

export const deleteBlog = (id: string) => async (
    dispatch: Dispatch<BlogAction>
) => {
    await api.delete(`/blogs/${id}`);
    dispatch({ type: BlogActionType.DELETE_BLOG, payload: id });
    history.push('/blogs');
};
