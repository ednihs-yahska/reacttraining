import { call, put, takeEvery, fork, takeLatest, all } from 'redux-saga/effects'
import axios from 'axios'

const baseUrl = "http://localhost:3000/api/v1"

const delay = (ms) => new Promise(res => setTimeout(res, ms))

const doGetGlobals = (payload)=>axios.get(`${baseUrl}/globals`)

const doGetWeather = (payload)=>axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=3e6f8563e78ad4af5b22613f67c58cbc`)

export function* getGlobals(payload) {
    let inputData = payload;
    console.log("Getting globals");
    const data = yield call(doGetGlobals, inputData);
    const alerts = {...data.data.content};
    yield put({ type: 'GOT_PRODUCT_GLOBALS', payload: alerts});
}

export function* getWeather(payload) {
  const response = yield call(doGetWeather, payload.payload);
  const weather = {...response.data.weather};
  yield put({ type: 'GOT_WEATHER', payload: weather});
}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
      yield takeEvery("GET_PRODUCT_GLOBALS", getGlobals),
      yield takeLatest("GET_WEATHER", getWeather),
    ])
}

