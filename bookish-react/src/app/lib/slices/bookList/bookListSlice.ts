import {createSlice} from "@reduxjs/toolkit";
import {AppStateType} from "@/app/lib/types";
import {fetchBooks} from "@/app/lib/slices/bookList/thunks";


const initialState: AppStateType = {
  books: [],
  loading: false,
  error: false,
  term: ""
}

export const bookListSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    setTerm: (state, action) => {
      state.term = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.loading = false;
    })
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  }
});

export const {
  setTerm
} = bookListSlice.actions;

export default bookListSlice.reducer;
