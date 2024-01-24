import { produce } from 'immer';

import { SET_ALL_POST } from './constants';

export const initialState = {
    postData: []
};

export const storedKey = [''];

const homeReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case SET_ALL_POST:
                draft.postData = action.postData;
                break;
        }
    });

export default homeReducer;