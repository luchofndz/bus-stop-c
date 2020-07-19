import * as type from './types/busActionsTypes';

// Saga Actions
export const getAllBusStopsAction = () => ({
    type: type.GET_BUS_STOPS,
});

// Redux Actions
export const setBusStopsAction = () => ({
    type: type.SET_BUS_STOPS,
});

export const setLoadingBusStops = () => ({
    type: type.SET_LOADING_BUS_STOPS,
});
