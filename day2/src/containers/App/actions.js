import { SET_LOCAL, SET_THEME, SET_POPUP, SET_LOADING, PING, SET_NAV_TRANSPARENT, DO_REGISTER, DO_LOGIN, ADD_TO_BOOKMARK, REMOVE_FROM_BOOKMARK } from '@containers/App/constants';

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

export const doRegister = (formData, cb) => ({
  type: DO_REGISTER,
  formData,
  cb
});

export const doLogin = (formData, cb) => ({
  type: DO_LOGIN,
  formData,
  cb
});

export const addToBookmark = (id, cb) => ({
  type: ADD_TO_BOOKMARK,
  id,
  cb
});

export const removeFromBookmark = (id, cb) => ({
  type: REMOVE_FROM_BOOKMARK,
  id,
  cb
})