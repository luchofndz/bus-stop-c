import { call, put, takeLatest, all } from 'redux-saga/effects';
import Api from '../api/index';
import * as busStopActions from '../actions/busStopActions';
import * as busStopActionTypes from '../actions/types/busActionsTypes';
import * as userActions from '../actions/userActions';
import * as userActionTypes from '../actions/types/userActionsTypes';

function* getAllBusStop() {
  try {
    yield put(busStopActions.setLoadingBusStops(true));
    yield put(busStopActions.setSuccessGetBusStop(false));
    const data = yield call(Api.busStops.getAllBusStops);

    // If exist in local storage just use it
    if (localStorage.getItem('busStopStorage27')) {
      let localData = localStorage.getItem('busStopStorage27');
      localData = JSON.parse(localData);
      yield put(busStopActions.setBusStopsAction(localData));
    } else {
      yield put(busStopActions.setBusStopsAction(data));
      localStorage.setItem('busStopStorage27', JSON.stringify(data));
    }

    console.log("info", data);
    yield put(busStopActions.setLoadingBusStops(false));
    yield put(busStopActions.setSuccessGetBusStop(true));
  } catch (err) {
    console.log(err);
    yield put(busStopActions.setGetBusStopError(err));
    yield put(busStopActions.setLoadingBusStops(false));
    yield put(busStopActions.setSuccessGetBusStop(false));
  }
}

function* setDonation(action) {
  try {
    yield put(userActions.setSuccessDonation(false));
    yield put(userActions.setLoading(true));
    // It is commented because have no real api to make a post
    // const data = yield call(Api.busStops.setDonation(action.value));

    let localData = localStorage.getItem('busStopStorage27');
    localData = JSON.parse(localData);
    console.log("dat: ", localData);

    // Update local file
    const busStopIndex = action.value.busStop;
    const name = action.value.name;
    const email = action.value.email;
    const currentAmount = parseInt(localData.busStops[busStopIndex].amount);
    const donatedAmount = parseInt(action.value.amount);
    localData.busStops[busStopIndex].amount = (currentAmount + donatedAmount);
    localData.busStops[busStopIndex].lastAmount = donatedAmount;
    localData.busStops[busStopIndex].lastDonatorName = name;
    localData.busStops[busStopIndex].lastDonatorEmail = email;

    // Update sorage file
    localStorage.setItem('busStopStorage27', JSON.stringify(localData));

    // Update data and refresh view
    yield put(busStopActions.getAllBusStopsAction());

    yield put(userActions.setLoading(false));
    yield put(userActions.setSuccessDonation(true));
  } catch (err) {
    yield put(userActions.setErrorDonation(err));
    yield put(userActions.setLoading(false));
    yield put(userActions.setSuccessDonation(false));
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
