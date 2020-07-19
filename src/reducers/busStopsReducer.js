import { Map } from 'immutable';
import * as t from '../actions/types/busActionsTypes';

const initialState = Map({
  busStops: null,
  isLoadingBusStops: false,
  errorGettingBusStop: null,
  successGetBusStops: false,
});

const busStops = function(state = initialState, action) {
  switch (action.type) {
    case t.SET_BUS_STOPS:
      return state.set('busStops', action.value);

    case t.SET_LOADING_BUS_STOPS:
      return state.set('isLoadingBusStops', action.value);

    case t.SET_ERROR_GET_BUS_STOPS:
      return state.set('errorGettingBusStop', action.value);

    case t.SET_SUCCESS_GET_BUS_STOPS:
      return state.set('successGetBusStops', action.value);
      
    default:
      return state;
  }
};

export default busStops;