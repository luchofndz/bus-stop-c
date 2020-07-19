import { fork, all } from 'redux-saga/effects';
import user from './userSaga';

export default function* startForman() {
  yield all([fork(user)]);
}
