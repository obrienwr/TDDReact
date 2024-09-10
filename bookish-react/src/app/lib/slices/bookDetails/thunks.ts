import {createAsyncThunk} from "@reduxjs/toolkit";
import {Book} from "@/app/lib/types";
import axios from "axios";

export const fetchBookDetails = createAsyncThunk<Book, string>(
  "bookDetails/fetch",
  async (id) => {
    const response = await axios.get(`http://localhost:8080/books/${id}`);
    return response.data;
  }
)