const getStateWithOnlyOneLevel = (state, levelOne) => {
  return state[levelOne];
};

function getState(state) {
  return getStateWithOnlyOneLevel(state, 'user');
}

// USER SELECTORS
export const getLoading = (state) => getState(state).get('loading');

// BUS STOP SELECTORS
export const getbusStops = (state) => getState(state).get('busStops');
export const getIfLoadingBusStops = (state) => getState(state).get('isLoadingBusStops');
