import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../saga/index';

// let store = createStore(rootReducer);

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)

export default store;