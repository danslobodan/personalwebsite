import { combineReducers } from 'redux';
import authReducer from '../../../LearningReact/streams/client/src/reducers/authReducer';
import authReducer from './authReducer';

export default combineReducers({
   auth: authReducer 
});