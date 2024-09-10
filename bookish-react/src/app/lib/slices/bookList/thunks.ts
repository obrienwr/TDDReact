import {createAsyncThunk} from "@reduxjs/toolkit";
import {Book} from "@/app/lib/types";
import axios from "axios";


export const fetchBooks = createAsyncThunk<Book[], string>(
  "books/fetchBooks",
  async (term: string = "") => {
    const response = await axios.get(
      `http://localhost:8080/books?q=${term}&_sort=id`
    );
    return response.data;
  }
)
