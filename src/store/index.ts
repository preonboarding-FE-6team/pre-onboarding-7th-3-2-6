import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { accountQuerySlice } from './accountQuerySlice';
import { headerTitleSlice } from './headerTitleSlice';
import { alertModalSlice } from './alertModalSlice';
import { userQuerySlice } from './userQuerySlice';

const rootReducer = combineReducers({
  [accountQuerySlice.name]: accountQuerySlice.reducer,
  [userQuerySlice.name]: userQuerySlice.reducer,
  [headerTitleSlice.name]: headerTitleSlice.reducer,
  [alertModalSlice.name]: alertModalSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
