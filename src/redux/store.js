import { configureStore } from '@reduxjs/toolkit';

import versionSlice from './version/versionSlice';
import championsSlice from './champions/championsSlice';
import { userReducer } from './user/userReducer';

export default configureStore({
  devTools: true,
  reducer: {
    version: versionSlice,
    user: userReducer,
    champions: championsSlice
  },
});

