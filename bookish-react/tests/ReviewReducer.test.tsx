import { Review } from "@/app/lib/types";
import axios from "axios";
import { updateReview } from "@/app/lib/slices/reviews/thunks";
import {jest, expect} from "@jest/globals";
import mockStore from "@/app/lib/mockStore";


describe("ReviewReducer and its thunks", () => {
  const review: Review = {
    id: 1,
    bookId: "1",
    name: "Ultra Magnus",
    date: "2024/09/09",
    content: "Hmm. Grammar was a bit off, but not worthy of avoiding."
  }
  const newContent = "I've changed my mind.";
  const updateReviewRequest = {
    bookId: "1",
    reviewId: 1,
    content: newContent
  }

  it("updates the review content when the edit is submitted", async () => {
    const putSpy = jest.spyOn(axios, 'put').mockResolvedValue({data: review});

    await mockStore.dispatch(
      updateReview(updateReviewRequest)
    ).then((response) => {
      expect(response.payload).toEqual(review);
    });

    expect(putSpy).toHaveBeenCalledWith(
      `http://localhost:8080/books/${review.bookId}/reviews/${review.id}`,
      {content: newContent}
    );
  });

  it("handles errors when updating a review", async () => {
    const error = new Error("Failed to update review");
    const putSpy = jest.spyOn(axios, 'put').mockRejectedValue(error);

    await mockStore.dispatch(
      updateReview(updateReviewRequest)
    ).then((response) => {
      expect(response.type).toEqual("reviews/updateReview/rejected");
    });

    expect(putSpy).toHaveBeenCalledWith(
      `http://localhost:8080/books/${review.bookId}/reviews/${review.id}`,
      {content: newContent}
    );
  });

});

