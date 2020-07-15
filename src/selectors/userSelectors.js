const getStateWithOnlyOneLevel = (state, levelOne) => {
  return state[levelOne];
};

function getState(state) {
  return getStateWithOnlyOneLevel(state, 'user');
}

export const getLoading = (state) => getState(state).get('loading');

