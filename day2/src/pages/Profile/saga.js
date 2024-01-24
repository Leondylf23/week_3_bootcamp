import { setLoading, showPopup } from "@containers/App/actions";
import { GET_MY_POST } from "./constants";
import { getMyPost } from "@domain/api";
import { setMyPost } from "./actions";
import { call, put, takeLatest } from "redux-saga/effects";

function* getMyPostDatas() {
    yield put(setLoading(true));
    try {
        const res = yield call(getMyPost);
        yield put(setMyPost(res?.data));

    } catch (error) {
        yield put(showPopup());
    }
    yield put(setLoading(false));
}

export default function* profileSaga() {
    yield takeLatest(GET_MY_POST, getMyPostDatas);
}
