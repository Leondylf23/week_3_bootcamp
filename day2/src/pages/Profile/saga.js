import { setLoading, showPopup } from "@containers/App/actions";
import { GET_MY_POST, SET_NEW_PROFILE_PICTURE } from "./constants";
import { getMyPost, getProfileData, updateUserProfilePicture } from "@domain/api";
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

function* setNewProfilePic({data, cb}) {
    yield put(setLoading(true));
    try {
        yield call(updateUserProfilePicture, data);
        const res = yield call(getProfileData);
        cb(res?.data?.profile?.profileImage);
    } catch(error) {
        yield put(showPopup());
    }
    yield put(setLoading(false));
}

export default function* profileSaga() {
    yield takeLatest(GET_MY_POST, getMyPostDatas);
    yield takeLatest(SET_NEW_PROFILE_PICTURE, setNewProfilePic);
}
