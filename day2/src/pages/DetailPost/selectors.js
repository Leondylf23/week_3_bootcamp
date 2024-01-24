import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPostDetailState = (state) => state.detail || initialState;

export const selectPostDetail = createSelector(selectPostDetailState, (state) => state.post);