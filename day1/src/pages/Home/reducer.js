import { produce } from "immer";
import { SET_USER_DATA, SET_PLAN_ID, SET_ADDON_IDS, SET_CATEGORY } from "./reduceContants";

export const initialState = {
    userData: null,
    planId: null,
    addOnsIds: null,
    category: null
}

const homeReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case SET_USER_DATA:
                draft.userData = action.userData;
                break;
            case SET_PLAN_ID:
                draft.planId = action.planId;
                break;
            case SET_ADDON_IDS:
                draft.addOnsIds = action.addOnsIds;
                break;
            case SET_CATEGORY:
                draft.category = action.category;
                break;
            default:
                break;
        }
    })

export default homeReducer;