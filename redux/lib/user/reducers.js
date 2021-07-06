import * as constants from './constants';

const initialState = {
  theme: 'light',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.CHANGE_USER_THEME_SUCCESS:
      return {
        ...state,
        theme: action.payload ? 'light' : 'dark',
      };
    default:
      return state;
  }
};

export default userReducer;