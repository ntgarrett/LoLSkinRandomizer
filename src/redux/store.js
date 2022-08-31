import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import versionSlice from './version/versionSlice';
import championsSlice from './champions/championsSlice';
import { userReducer } from './user/userReducer';

const rootReducer = combineReducers({
  version: versionSlice,
  user: userReducer,
  champions: championsSlice
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store);