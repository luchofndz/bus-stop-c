import { combineReducers } from 'redux';
import user from './userReducer';
import busStops from './busStopsReducer';

const rootReducer = combineReducers({
  user,
  busStops
});

export default rootReducer;