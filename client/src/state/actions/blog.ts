import { BlogActionType } from '../action-types';
import { Blog } from '../../models/Blog';

interface GetBlogsAction {
    type: BlogActionType.GET_BLOGS;
    payload: Blog[];
}

interface GetBlogAction {
    type: BlogActionType.GET_BLOG;
    payload: Blog;
}

interface CreateBlogAction {
    type: BlogActionType.CREATE_BLOG;
    payload: Blog;
}

interface EditBlogAction {
    type: BlogActionType.EDIT_BLOG;
    payload: Blog;
}

interface DeleteBlogAction {
    type: BlogActionType.DELETE_BLOG;
    payload: string;
}

export type BlogAction =
    | GetBlogAction
    | GetBlogsAction
    | CreateBlogAction
    | EditBlogAction
    | DeleteBlogAction;
