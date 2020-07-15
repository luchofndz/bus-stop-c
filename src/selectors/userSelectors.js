import { getStateWithOnlyOneLevel } from '../utils/StateSelectorHelper';

function getState(state) {
  return getStateWithOnlyOneLevel(state, 'user');
}

export const getLoading = (state) => getState(state).get('loading');

