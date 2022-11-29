import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import { userAPI } from './services/userRTK';

const rootReducer = combineReducers({
  userReducer,
  [userAPI.reducerPath]: userAPI.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userAPI.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
