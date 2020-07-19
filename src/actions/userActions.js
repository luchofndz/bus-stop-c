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

export const setSuccessDonation = (value) => ({
  type: type.SET_SUCCESS_DONATION,
  value,
});

export const setErrorDonation = (value) => ({
  type: type.SET_ERROR_DONATION,
  value,
});