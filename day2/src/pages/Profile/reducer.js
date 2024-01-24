import { produce } from 'immer';
import { SET_MY_POST } from './constants';

export const initialState = {
  postDatas: []
};

export const storedKey = [''];

const profileReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_MY_POST:
        draft.postDatas = action.postDatas;
        break;
    }
  });

export default profileReducer;
