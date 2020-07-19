const getStateWithOnlyOneLevel = (state, levelOne) => {
  return state[levelOne];
};

function getState(state) {
  return getStateWithOnlyOneLevel(state, 'user');
}

// USER SELECTORS
export const getLoading = (state) => getState(state).get('loading');
