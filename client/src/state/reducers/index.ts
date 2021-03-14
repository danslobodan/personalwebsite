import { combineReducers } from 'redux';
import authReducer from './auth';
import blogReducer from './blog';

const reducers = combineReducers({
    auth: authReducer,
    blogs: blogReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
