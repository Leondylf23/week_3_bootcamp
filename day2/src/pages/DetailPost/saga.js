import { setLoading, showPopup } from "@containers/App/actions";
import { GET_POST_DETAIL } from "./constants";
import { getMyPost } from "@domain/api";
import { setMyPost } from "./actions";
import { call, put, takeLatest } from "redux-saga/effects";

function* getPostDetail({id}) {
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
    yield takeLatest(GET_POST_DETAIL, getPostDetail);
}
