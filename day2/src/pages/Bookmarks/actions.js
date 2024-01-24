import { GET_BOOKMARK, SET_BOOKMARK } from "./constants";

export const getBookmark = () => ({
    type: GET_BOOKMARK,
});
export const setBookmark = (data) => ({
    type: SET_BOOKMARK,
    data
});