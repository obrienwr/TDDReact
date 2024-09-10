import {expect} from '@jest/globals';
import ReviewList from "@/app/ui/components/Reviews/ReviewList";
import {render} from "@testing-library/react";
import {Review} from "@/app/lib/types";
import {screen} from "@testing-library/react";
import ReviewItem from "@/app/ui/components/Reviews/ReviewItem";

describe("ReviewList", () => {

  const sampleReview = {
    id: 1,
    bookId: "1",
    name: "Ultra Magnus",
    date: "2024/09/09",
    content: "Hmm. Grammar was a bit off, but not worthy of avoiding."
  }

  it("renders the correct review content", () => {
    render(<ReviewItem review={sampleReview} />);

    expect(screen.getByTestId("name")).toHaveTextContent(sampleReview.name);
    expect(screen.getByTestId("content")).toHaveTextContent(sampleReview.content);
  });
});

