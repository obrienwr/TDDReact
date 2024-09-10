import {jest, expect} from '@jest/globals';
import {fireEvent} from "@testing-library/react";
import {screen} from "@testing-library/react";
import ReviewItem from "@/app/ui/components/Reviews/ReviewItem";
import customRender from "./testUtilities/customRender";
import axios from "axios";
import {act} from "react";

describe("ReviewList", () => {

  const sampleReview = {
    id: 1,
    bookId: "1",
    name: "Ultra Magnus",
    date: "2024/09/09",
    content: "Hmm. Grammar was a bit off, but not worthy of avoiding."
  }

  it("renders the correct review content", () => {
    customRender(<ReviewItem review={sampleReview} />);
    expect(screen.getByTestId("name")).toHaveTextContent(sampleReview.name);
    expect(screen.getByTestId("content")).toHaveTextContent(sampleReview.content);
  });

  it("allows editing of the review content", () => {
    customRender(<ReviewItem review={sampleReview} />);
    const editButton = screen.getByRole("button");
    expect(editButton).toHaveTextContent('Edit');
    fireEvent.click(editButton);
    expect(editButton).toHaveTextContent('Submit');
  });

  it("updates the review content when the edit is submitted", () => {
    const newValue = "I've changed my mind.";
    customRender(<ReviewItem review={sampleReview} />);
    const putSpy = jest.spyOn(axios, "put").mockResolvedValue({data: sampleReview});

    const editButton = screen.getByRole("button");
    act(() => {
      fireEvent.click(editButton);
    });
    const muiContentInput = screen.getByTestId("content-input");
    expect(muiContentInput).toBeInTheDocument();
    act(() => {
      fireEvent.change(muiContentInput, {target: {value: newValue}});
      fireEvent.click(editButton);
    });
    expect(putSpy).toHaveBeenCalledWith(
      `http://localhost:8080/books/${sampleReview.bookId}/reviews/${sampleReview.id}`,
      {content: newValue}
    );
  });
});

