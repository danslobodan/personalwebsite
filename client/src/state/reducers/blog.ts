import _ from 'lodash';
import { Blog } from '../../models/Blog';
import { BlogActionType } from '../action-types';
import { BlogAction } from '../actions';

interface BlogState {
    [id: string]: Blog;
}

const initialState = {};

const blogReducer = (
    state: BlogState = initialState,
    action: BlogAction
): BlogState => {
    switch (action.type) {
        case BlogActionType.GET_BLOGS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case BlogActionType.GET_BLOG:
            return { ...state, [action.payload.id]: action.payload };
        case BlogActionType.CREATE_BLOG:
            return { ...state, [action.payload.id]: action.payload };
        case BlogActionType.EDIT_BLOG:
            return { ...state, [action.payload.id]: action.payload };
        case BlogActionType.DELETE_BLOG:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};

export default blogReducer;
