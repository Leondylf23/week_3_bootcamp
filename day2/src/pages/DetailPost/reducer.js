import { produce } from 'immer';
import { SET_POST_DETAIL } from './constants';

export const initialState = {
  post: {}
};

export const storedKey = [''];

const detailReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_POST_DETAIL:
        draft.post = action.post;
        break;
    }
  });

export default detailReducer;
