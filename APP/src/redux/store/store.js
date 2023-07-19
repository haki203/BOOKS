import { configureStore } from '@reduxjs/toolkit';
import themeSlice from '../reducer/themeSlice';

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export default store;
