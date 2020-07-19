import * as type from './types/userActionsTypes';

// Action Redux User
export const setLoading = (value) => ({
  type: type.SET_LOADING,
  value,
});

// Action Saga User
export const setDonation = (value) => ({
  type: type.SET_DONATION,
  value,
});