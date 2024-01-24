import { SET_LOGIN, SET_LOGIN_INFOMRATION, SET_TOKEN } from '@containers/Client/constants';

export const setLogin = (login) => ({
  type: SET_LOGIN,
  login,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const setLoginInformation = (data) => ({
  type: SET_LOGIN_INFOMRATION,
  data,
});