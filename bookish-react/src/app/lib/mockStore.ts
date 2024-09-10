import {configureStore} from '@reduxjs/toolkit';
import bookListReducer from '@/app/lib/slices/bookList/bookListSlice';

const mockStore = configureStore({
  reducer: {
    list: bookListReducer
  }
});

export default mockStore;
