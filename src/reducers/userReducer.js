import { Map } from 'immutable';
import * as t from '../actions/types/userActionsTypes';

const initialState = Map({
  loading: false,
  donator: {
    name: null,
    email: null,
    busStop: null,
    amount: null
  },
  donationError: null
});

const user = function(state = initialState, action) {
  switch (action.type) {
    case t.SET_LOADING:
      return state.set('loading', action.value);
    // case t.SET_DONATION:
    //     return state.set('donator', action.value);
      
    default:
      return state;
  }
};

export default user;
