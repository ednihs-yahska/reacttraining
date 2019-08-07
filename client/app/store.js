import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger' 


import allSagas from './sagas/allSagas';
import axios from 'axios';
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, logger)
);

// then run the saga
console.log("Running All Sagas")
sagaMiddleware.run(allSagas)

export default store;