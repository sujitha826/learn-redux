// Import and Combine all reducers here
import counterReducer from './counter';
import loggedReducer from './loggedIn';
import profileReducer from './profile';
import { combineReducers } from 'redux';

const allReducers = combineReducers({ counter: counterReducer, isLogged: loggedReducer, user: profileReducer });

export default allReducers;