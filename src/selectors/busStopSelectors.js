const getStateWithOnlyOneLevel = (state, levelOne) => {
    return state[levelOne];
  };
  
  function getState(state) {
    return getStateWithOnlyOneLevel(state, 'busStops');
  }
  
  // BUS STOP SELECTORS
  export const getbusStops = (state) => getState(state).get('busStops');
  export const getIfLoadingBusStops = (state) => getState(state).get('isLoadingBusStops');
  