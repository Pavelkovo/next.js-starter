import { all } from 'redux-saga/effects';

import userSagas from './lib/user/sagas';

function* rootSaga() {
  yield all([
    userSagas(),
  ]);
}

export default rootSaga;