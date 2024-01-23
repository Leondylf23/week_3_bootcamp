import { SET_ADDON_IDS, SET_CATEGORY, SET_PLAN_ID, SET_USER_DATA } from "./reduceContants";

export const setUserInfo = (userData) => ({
    type: SET_USER_DATA,
    userData
});
export const setPlanId = (planId) => ({
    type: SET_PLAN_ID,
    planId
});
export const setAddOnsIds = (addOnsIds) => ({
    type: SET_ADDON_IDS,
    addOnsIds
});
export const setCategoryRedux = (category) => ({
    type: SET_CATEGORY,
    category
});