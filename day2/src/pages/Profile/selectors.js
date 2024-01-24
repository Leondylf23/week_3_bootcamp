import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProfileState = (state) => state.profile || initialState;

export const selectMyPost = createSelector(selectProfileState, (state) => state.postDatas);