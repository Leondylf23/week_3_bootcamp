import { GET_POST_DETAIL, SET_POST_DETAIL } from "./constants";

export const getPostDetail = (id, cbNotFound) => ({
    type: GET_POST_DETAIL,
    id,
    cbNotFound
});
export const setPostDetail = (post) => ({
    type: SET_POST_DETAIL,
    post
});