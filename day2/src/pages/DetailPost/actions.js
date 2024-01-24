import { GET_POST_DETAIL, SET_POST_DETAIL } from "./constants";

export const getMyPost = (id) => ({
    type: GET_POST_DETAIL,
    id
});
export const setMyPost = (post) => ({
    type: SET_POST_DETAIL,
    post
});