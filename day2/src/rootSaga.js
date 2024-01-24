import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import homeSaga from '@pages/Home/saga';
import newJourneySaga from '@pages/NewJourney/saga';
import profileSaga from '@pages/Profile/saga';
import detailSaga from '@pages/DetailPost/saga';
import bookmarkSaga from '@pages/Bookmarks/saga';

export default function* rootSaga() {
  yield all([
    appSaga(),
    homeSaga(),
    newJourneySaga(),
    profileSaga(),
    detailSaga(),
    bookmarkSaga()
  ]);
}
