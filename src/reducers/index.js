import { combineReducers } from 'redux';
import authReducer from './authReducer';
import blogReducer from './blogReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
   auth: authReducer,
   form: formReducer,
   blogs: blogReducer
});