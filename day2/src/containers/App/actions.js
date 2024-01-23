import { SET_LOCAL, SET_THEME, SET_POPUP, SET_LOADING, PING, SET_NAV_TRANSPARENT } from '@containers/App/constants';

export const setLocale = (locale) => ({
  type: SET_LOCAL,
  locale,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  theme,
});

export const showPopup = (title = '', message = '') => ({
  type: SET_POPUP,
  popup: {
    open: true,
    title,
    message,
  },
});

export const hidePopup = () => ({
  type: SET_POPUP,
  popup: {
    open: false,
    title: '',
    message: '',
  },
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});

export const ping = () => ({
  type: PING,
});

export const setNavTransparent = (isNavTransparent) => ({
  type: SET_NAV_TRANSPARENT,
  isNavTransparent
});