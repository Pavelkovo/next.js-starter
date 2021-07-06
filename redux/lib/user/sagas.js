import {
  call,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import * as services from './services';

export function* changeUserTheme({ payload }) {
  try {
    yield call(services.changeUserTheme, payload);
    yield put(actions.changeUserThemeSuccess(payload));
    // eslint-disable-next-line no-empty
  } catch (e) {
    console.log(e);
  }
}

export default function* userSagas() {
  yield takeLatest(constants.CHANGE_USER_THEME, changeUserTheme);
}