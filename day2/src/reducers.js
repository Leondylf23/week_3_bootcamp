import { combineReducers } from 'redux';

import appReducer, { storedKey as storedAppState } from '@containers/App/reducer';
import clientReducer, { storedKey as storedClientState } from '@containers/Client/reducer';
import homeReducer, { storedKey as storedHomeState } from '@pages/Home/reducer';
import profileReducer, { storedKey as storedProfileState } from '@pages/Profile/reducer';
import detailReducer, { storedKey as storedDetailState } from '@pages/DetailPost/reducer';
import bookmarkReducer, { storedKey as storedBookmarkState} from '@pages/Bookmarks/reducer';
import languageReducer from '@containers/Language/reducer';

import { mapWithPersistor } from './persistence';

const storedReducers = {
  app: { reducer: appReducer, whitelist: storedAppState },
  client: { reducer: clientReducer, whitelist: storedClientState },
  home: { reducer: homeReducer, whitelist: storedHomeState },
  profile: { reducer: profileReducer, whitelist: storedProfileState },
  detail: { reducer: detailReducer, whitelist: storedDetailState },
  bookmark: { reducer: bookmarkReducer, whitelist: storedBookmarkState}
};

const temporaryReducers = {
  language: languageReducer,
};

const createReducer = () => {
  const coreReducer = combineReducers({
    ...mapWithPersistor(storedReducers),
    ...temporaryReducers,
  });
  const rootReducer = (state, action) => coreReducer(state, action);
  return rootReducer;
};

export default createReducer;
