import { Dispatch } from 'redux';

import { BlogActionType } from '../action-types';
import { BlogAction } from '../actions';
import { BlogFields } from '../../models/Blog';

import blogs from '../../apis/blogs';
import history from '../../history';

export const getBlogs = () => async (dispatch: Dispatch<BlogAction>) => {
    const response = await blogs.get('/blogs');
    dispatch({ type: BlogActionType.GET_BLOGS, payload: response.data });
};

export const getBlog = (id: string) => async (
    dispatch: Dispatch<BlogAction>
) => {
    const response = await blogs.get(`/blogs/${id}`);
    dispatch({ type: BlogActionType.GET_BLOG, payload: response.data });
};

export const createBlog = (formValues: BlogFields) => async (
    dispatch: Dispatch<BlogAction>
) => {
    const response = await blogs.post('/blogs', formValues);
    dispatch({ type: BlogActionType.CREATE_BLOG, payload: response.data });
    history.push('/blogs');
};

export const editBlog = (id: string, formValues: BlogFields) => async (
    dispatch: Dispatch<BlogAction>
) => {
    const response = await blogs.patch(`/blogs/${id}`, formValues);
    dispatch({ type: BlogActionType.EDIT_BLOG, payload: response.data });
    history.push('/blogs');
};

export const deleteBlog = (id: string) => async (
    dispatch: Dispatch<BlogAction>
) => {
    await blogs.delete(`/blogs/${id}`);
    dispatch({ type: BlogActionType.DELETE_BLOG, payload: id });
    history.push('/blogs');
};
