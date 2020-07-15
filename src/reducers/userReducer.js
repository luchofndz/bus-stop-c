import { Map } from 'immutable';
import * as t from '../actions/types/userActionsTypes';

const initialState = Map({
  loading: false,
});

const user = function(state = initialState, action) {
  switch (action.type) {
    case t.SET_LOADING:
      return state.set('loading', action.value);

    default:
      return state;
  }
};

export default user;
