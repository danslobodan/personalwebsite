import { BlogActionType } from '../action-types';
import { Blog } from '../../models/Blog';

interface GetBlogsAction {
    type: BlogActionType.GET_BLOGS;
    payload: Blog[];
}

export type BlogAction = GetBlogsAction;
