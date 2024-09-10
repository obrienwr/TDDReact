import {createAsyncThunk} from "@reduxjs/toolkit";
import {Review, AddReviewRequest} from "@/app/lib/types";
import axios from "axios";

export const addReview = createAsyncThunk<Review, AddReviewRequest>(
  "reviews/addReview",
  async ({bookId, name, content}: AddReviewRequest) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/books/${bookId}/reviews`,
        {name, content}
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
