import { combineReducers } from 'redux';
import authReducer from './auth';
import blogReducer from './blog';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    blogs: blogReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
