import { Map } from 'immutable';
import * as t from '../actions/types/busActionsTypes';

const initialState = Map({
  busStops: null,
  isLoadingBusStops: false
});

const busStops = function(state = initialState, action) {
  switch (action.type) {
    case t.SET_BUS_STOPS:
      return state.set('busStops', action.value);

    case t.SET_LOADING_BUS_STOPS:
      return state.set('isLoadingBusStops', action.value);

    default:
      return state;
  }
};

export default busStops;