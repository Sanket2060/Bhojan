// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/user/authslice';
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
