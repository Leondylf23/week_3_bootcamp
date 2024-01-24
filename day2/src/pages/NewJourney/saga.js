import { takeLatest, call, put } from 'redux-saga/effects';
import { ADD_NEW_JOURNEY } from './constants';
import { postNewPost } from '@domain/api';
import { setLoading, showPopup } from '@containers/App/actions';

function* addNewJourney({token, formData, cb}) {
  yield put(setLoading(true));
  try {
    console.log(formData)
    yield call(postNewPost, token, formData);
    cb();
  } catch (error) {
    yield put(showPopup());
  }
  yield put(setLoading(false));
}

export default function* newJourneySaga() {
  yield takeLatest(ADD_NEW_JOURNEY, addNewJourney);
}
