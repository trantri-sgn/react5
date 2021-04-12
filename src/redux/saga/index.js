import { takeLatest } from 'redux-saga/effects'
import { AUTH_FETCH_LOGIN, AUTH_LOGOUT } from '../type'
import { fetchLogin } from './authSaga'

export default function* mySaga() {
    yield takeLatest(AUTH_FETCH_LOGIN, fetchLogin)

}