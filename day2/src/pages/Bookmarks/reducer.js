import { produce } from 'immer';
import { SET_BOOKMARK } from './constants';

export const initialState = {
  bookmarks: []
};

export const storedKey = [''];

const bookmarkReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_BOOKMARK:
        draft.bookmarks = action.data;
        break;
    }
  });

export default bookmarkReducer;
