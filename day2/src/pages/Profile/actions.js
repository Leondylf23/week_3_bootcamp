import { GET_MY_POST, SET_MY_POST } from "./constants";

export const getMyPost = () => ({
    type: GET_MY_POST,
});
export const setMyPost = (postDatas) => ({
    type: SET_MY_POST,
    postDatas
});