import { call, put } from 'redux-saga/effects'
import userApi from '../../api/userApi'
import { popupLogin } from '../actions/authAction'

export function* fetchLogin(action) {
    let res = yield call(userApi.register, action.payload)

}

