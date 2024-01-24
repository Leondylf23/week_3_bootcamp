import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_ALL_POST } from './constants';
import { setLoading, showPopup } from '@containers/App/actions';
import { fetchHomePostData } from '@domain/api';
import { setAllPost } from './actions';


function* getAllPost() {
    yield put(setLoading(true));
    try {
        const res = yield call(fetchHomePostData);
        yield put(setAllPost(res?.data));
    } catch (error) {
        console.error(error);
        yield put(showPopup("Error", error.message));
    }
    yield put(setLoading(false));
}

export default function* homeSaga() {
    yield takeLatest(GET_ALL_POST, getAllPost);
}