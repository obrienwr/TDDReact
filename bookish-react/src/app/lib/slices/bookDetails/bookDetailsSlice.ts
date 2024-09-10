import {BookDetailType} from "@/app/lib/types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchBookDetails} from "@/app/lib/slices/bookDetails/thunks";

const initialState: BookDetailType = {
  book: {
    id: "0",
    name: "",
  },
  loading: false,
  error: false
};


const bookDetailsSlice = createSlice({
  name: "bookDetails",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookDetails.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchBookDetails.fulfilled, (state, action) => {
        state.book = action.payload;
        state.loading = false;
      })
      .addCase(fetchBookDetails.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  }
});

export default bookDetailsSlice.reducer;
