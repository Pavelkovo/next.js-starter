import * as ActionTypes from './constants';

// Change site theme
export const changeUserTheme = (payload) => ({
  type: ActionTypes.CHANGE_USER_THEME,
  payload,
});
export const changeUserThemeSuccess = (payload) => ({
  type: ActionTypes.CHANGE_USER_THEME_SUCCESS,
  payload,
});
