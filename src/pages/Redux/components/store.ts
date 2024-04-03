import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
