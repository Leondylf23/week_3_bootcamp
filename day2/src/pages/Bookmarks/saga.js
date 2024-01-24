import { setLoading, showPopup } from "@containers/App/actions";
import { GET_BOOKMARK } from "./constants";
import { setBookmark } from "./actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { getBookmarksApi } from "@domain/api";

function* getBookmarks() {
    yield put(setLoading(true));
    try {
        const res = yield call(getBookmarksApi);
        yield put(setBookmark(res?.data));
    } catch (error) {
        yield put(showPopup());
    }
    yield put(setLoading(false));
}

export default function* bookmarkSaga() {
    yield takeLatest(GET_BOOKMARK, getBookmarks);
}
