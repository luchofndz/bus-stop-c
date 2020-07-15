import * as type from './types/userActionsTypes';

export const setLoading = (value) => ({
  type: type.SET_LOADING,
  value,
});