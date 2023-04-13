import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import cigarReducer from '../features/cigars/cigarSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cigars: cigarReducer
  },
});
