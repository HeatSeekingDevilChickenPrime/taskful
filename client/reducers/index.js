import { combineReducers } from 'redux';
import choreReducer from './ChoreReducer';

const reducers = combineReducers({
  chores: choreReducer,
})






export default reducers;