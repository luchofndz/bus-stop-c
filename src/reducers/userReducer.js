import { Map } from 'immutable';
import * as t from '../actions/types/userActionsTypes';

const initialState = Map({
  loading: false,
  donationError: null, 
  successDonation: false
});

const user = function(state = initialState, action) {
  switch (action.type) {
    case t.SET_LOADING:
      return state.set('loading', action.value);

    case t.SET_SUCCESS_DONATION:
      return state.set('successDonation', action.value);

    case t.SET_ERROR_DONATION:
      return state.set('donationError', action.value);
      
    default:
      return state;
  }
};

export default user;