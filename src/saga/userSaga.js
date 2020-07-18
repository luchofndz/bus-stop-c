import { call, put, takeLatest, all, takeEvery } from 'redux-saga/effects';
import Api from '../api/index';
import * as busStopActions from '../actions/busStopActions';
import * as busStopActionTypes from '../actions/types/busActionsTypes';

function* getAllBusStop() {
  try {
    console.log("HERE");
    const info = yield call(Api.busStops.getAllBusStops);

    console.log("info", info);
  } catch (err) {
    console.log("here2");
    console.log(err);
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
