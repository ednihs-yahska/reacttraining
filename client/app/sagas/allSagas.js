import { all, fork, takeLatest, put, call } from 'redux-saga/effects'
import homeSaga from './homeSaga'

export default function* allSagas() {
    yield all([
      fork(homeSaga)
    ])
  }