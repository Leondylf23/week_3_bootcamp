import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomeState = (state) => state.home || initialState;

export const selectAllPost = createSelector(selectHomeState, (state) => state.postData);