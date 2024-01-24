import { GET_MY_POST, SET_MY_POST, SET_NEW_PROFILE_PICTURE } from "./constants";

export const getMyPost = () => ({
    type: GET_MY_POST,
});
export const setMyPost = (postDatas) => ({
    type: SET_MY_POST,
    postDatas
});
export const setNewProfilePicture = (data, cb) => ({
    type: SET_NEW_PROFILE_PICTURE,
    data,
    cb
});