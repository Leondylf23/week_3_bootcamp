import { takeLatest, call, put } from 'redux-saga/effects';

import { getLoginUser, ping, sendRegisterUser } from '@domain/api';
import { showPopup, setLoading } from '@containers/App/actions';
import { DO_LOGIN, DO_REGISTER, PING } from '@containers/App/constants';
import { setLogin, setLoginInformation, setToken } from '@containers/Client/actions';

function* doPing() {
  yield put(setLoading(true));
  try {
    yield call(ping);
  } catch (error) {
    yield put(showPopup());
  }
  yield put(setLoading(false));
}

function* doRegister({formData, cb}) {
  yield put(setLoading(true));
  try {
    yield call(sendRegisterUser, formData);
    cb();
  } catch (error) {
    yield put(showPopup());
  }
  yield put(setLoading(false));
}

function* doLogin({formData, cb}) {
  yield put(setLoading(true));
  try {
    const resLogin = yield call(getLoginUser, formData);
    const token = resLogin?.data?.token;
    const userData = resLogin?.data?.user;
    yield put(setToken(token));

    yield put(setLogin(true));
    yield put(setLoginInformation(userData));
    
    cb();
  } catch (error) {
    yield put(showPopup());
  }
  yield put(setLoading(false));
}

export default function* appSaga() {
  yield takeLatest(PING, doPing);
  yield takeLatest(DO_REGISTER, doRegister);
  yield takeLatest(DO_LOGIN, doLogin);
}
