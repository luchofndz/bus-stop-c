import * as type from './types/busActionsTypes';

// Saga Actions
export const getAllBusStopsAction = () => ({
    type: type.GET_BUS_STOPS,
});

// Redux Actions
export const setBusStopsAction = (value) => ({
    type: type.SET_BUS_STOPS,
    value
});

export const setLoadingBusStops = (value) => ({
    type: type.SET_LOADING_BUS_STOPS,
    value
});

export const setGetBusStopError = (value) => ({
    type: type.SET_ERROR_GET_BUS_STOPS,
    value
});

export const setSuccessGetBusStop = (value) => ({
    type: type.SET_SUCCESS_GET_BUS_STOPS,
    value
});