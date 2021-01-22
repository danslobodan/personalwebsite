import { 
    SIGN_IN, 
    SIGN_OUT,
    CREATE_BLOG,
    EDIT_BLOG
} from './types';

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

export const createBlog = formValues => {
    return {
        type: CREATE_BLOG,
        payload: formValues
    }
}

export const editBlog = formValues => {
    return {
        type: EDIT_BLOG,
        payload: formValues
    }
}