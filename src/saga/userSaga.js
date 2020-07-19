import { call, put, takeLatest, all } from 'redux-saga/effects';
import Api from '../api/index';
import * as busStopActions from '../actions/busStopActions';
import * as busStopActionTypes from '../actions/types/busActionsTypes';

function* getAllBusStop() {
  try {
    yield put(busStopActions.setLoadingBusStops(true));
    const data = yield call(Api.busStops.getAllBusStops);
    if (data) {
        busStopActions.setBusStopsAction(data);
    }
    console.log("info", data);
    yield put(busStopActions.setLoadingBusStops(false));
  } catch (err) {
    console.log(err);
    yield put(busStopActions.setLoadingBusStops(false));
  }
}

function* getAllBusStopWatcher() {
  yield takeLatest(busStopActionTypes.GET_BUS_STOPS, getAllBusStop);
}

export default function* sagas() {
  yield all([
    getAllBusStopWatcher()
  ]);
}
