import _ from 'lodash';
import {
    CREATE_BLOG,
    DELETE_BLOG,
    EDIT_BLOG,
    GET_BLOG,
    GET_BLOGS
} from '../actions/types';

const blogReducer = (state = {}, action) => {

    switch (action.type) {
        case GET_BLOGS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case GET_BLOG:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_BLOG:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_BLOG:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_BLOG:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}

export default blogReducer;