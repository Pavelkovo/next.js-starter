import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

import rootReducer from './reducers';
import rootSaga from './sagas';

const reducer = persistReducer(
  {
    key: 'rrsb',
    // storage,
    storage: storageSession,
  },
  rootReducer,
);
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const bindMiddleware = () => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(reducer, bindMiddleware());
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
export { store, persistor };