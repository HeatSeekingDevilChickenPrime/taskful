import { combineReducers } from 'redux';
import choreReducer from './ChoreReducer';

const reducers = combineReducers({
  chores: choresReducer,
})






export default reducers;