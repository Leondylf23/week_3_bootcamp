import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBookmarkState = (state) => state.bookmark || initialState;

export const selectBookmarks = createSelector(selectBookmarkState, (state) => state.bookmarks);