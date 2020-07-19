import { call, put, takeLatest, all } from 'redux-saga/effects';
import Api from '../api/index';
import * as busStopActions from '../actions/busStopActions';
import * as busStopActionTypes from '../actions/types/busActionsTypes';
import * as userActions from '../actions/userActions';
import * as userActionTypes from '../actions/types/userActionsTypes';

function* getAllBusStop() {
  try {
    yield put(busStopActions.setLoadingBusStops(true));
    const data = yield call(Api.busStops.getAllBusStops);

    if (localStorage.getItem('busStopStorage27')) {
      let localData = localStorage.getItem('busStopStorage27');
      localData = JSON.parse(localData);
      yield put(busStopActions.setBusStopsAction(localData));
    } else {
      yield put(busStopActions.setBusStopsAction(data));
      localStorage.setItem('busStopStorage27', JSON.stringify(data));
    }

    // yield put(busStopActions.setBusStopsAction(data));
    console.log("info", data);
    yield put(busStopActions.setLoadingBusStops(false));
    // yield put(busStopActions.setSuccessBusStops(true));
  } catch (err) {
    console.log(err);
    yield put(busStopActions.setGetBusStopError(err));
    yield put(busStopActions.setLoadingBusStops(false));
    // yield put(busStopActions.setSuccessBusStops(false));
  }
}

function* setDonation(action) {
  try {
    yield put(userActions.setLoading(true));
    // const data = yield call(Api.busStops.setDonation(action.value));

    let localData = localStorage.getItem('busStopStorage27');
    localData = JSON.parse(localData);
    console.log("dat: ", localData);

    // Update local file
    const busStopIndex = action.value.busStop;
    const name = action.value.name;
    const email = action.value.email;
    const currentAmount = localData.busStops[busStopIndex].amount;
    const donatedAmount = action.value.amount;
    localData.busStops[busStopIndex].amount = (currentAmount + donatedAmount);
    localData.busStops[busStopIndex].lastAmount = donatedAmount;
    localData.busStops[busStopIndex].lastDonatorName = name;
    localData.busStops[busStopIndex].lastDonatorEmail = email;

    // Update sorage file
    localStorage.setItem('busStopStorage27', JSON.stringify(localData));

    yield put(busStopActions.getAllBusStopsAction());

    // yield put(busStopActions.setBusStopsAction(data));
    // console.log("info", data);
    yield put(userActions.setLoading(false));
    // yield put(busStopActions.setSuccessBusStops(true));
  } catch (err) {
    console.log(err);
    // yield put(busStopActions.setGetBusStopError(err));
    yield put(userActions.setLoading(false));
    // yield put(busStopActions.setSuccessBusStops(false));
  }
}

function* getAllBusStopWatcher() {
  yield takeLatest(busStopActionTypes.GET_BUS_STOPS, getAllBusStop);
}

function* setDonationWatcher() {
  yield takeLatest(userActionTypes.SET_DONATION, setDonation);
}

export default function* sagas() {
  yield all([
    getAllBusStopWatcher(),
    setDonationWatcher()
  ]);
}
