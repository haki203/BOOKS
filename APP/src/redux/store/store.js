import { configureStore } from '@reduxjs/toolkit';
import themeSlice from '../reducer/themeSlice';
import authReducer from '../reducer/authReducer';

const store = configureStore({
  reducer: {
    theme: themeSlice,
    auth: authReducer,
  },
  
});

export default store;
