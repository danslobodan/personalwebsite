import { 
    SIGN_IN, 
    SIGN_OUT,
    CREATE_BLOG,
    EDIT_BLOG,
    GET_BLOGS,
    GET_BLOG
} from './types';
import blogs from '../apis/blogs';
import history from '../history';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const getBlogs = () => async dispatch => {
    const response = await blogs.get('/blogs');
    dispatch({ type: GET_BLOGS, payload: response.data });
}

export const getBlog = id => async dispatch => {
    console.log(id);
    const response = await blogs.get(`/blogs/${id}`);
    dispatch({ type: GET_BLOG, payload: response.data });
}

export const createBlog = formValues => async dispatch => {
    const response = await blogs.post('/blogs', formValues);
    dispatch({ type: CREATE_BLOG, payload: response.data });
    history.push('/');
}

export const editBlog = (id, formValues) => async dispatch => {
    const response = await blogs.patch(`/blogs/${id}`, formValues);
    dispatch({ type: EDIT_BLOG, payload: response.data });
    history.push('/');
}