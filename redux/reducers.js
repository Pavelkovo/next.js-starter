import { combineReducers } from 'redux';

import userReducer from './lib/user/reducers';

export const appReducers = {
  user: userReducer,
};

const rootReducer = combineReducers({ ...appReducers });

export default rootReducer;