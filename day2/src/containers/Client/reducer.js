import { produce } from 'immer';

import { SET_LOGIN, SET_LOGIN_INFOMRATION, SET_TOKEN } from '@containers/Client/constants';

export const initialState = {
  login: false,
  token: null,
  loginInformation: null
};

export const storedKey = ['token', 'login', 'loginInformation'];

const clientReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LOGIN:
        draft.login = action.login;
        break;
      case SET_TOKEN:
        draft.token = action.token;
        break;
      case SET_LOGIN_INFOMRATION:
        draft.loginInformation = action.data;
        break;
    }
  });

export default clientReducer;
