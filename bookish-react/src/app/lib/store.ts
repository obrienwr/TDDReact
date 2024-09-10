import {configureStore} from "@reduxjs/toolkit";
import bookListReducer from "@/app/lib/slices/bookList/bookListSlice";
import bookDetailsReducer from "@/app/lib/slices/bookDetails/bookDetailsSlice";

const store = configureStore({
  reducer: {
    list: bookListReducer,
    detail: bookDetailsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
