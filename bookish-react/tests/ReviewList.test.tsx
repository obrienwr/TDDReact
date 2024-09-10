import {expect} from '@jest/globals';
import ReviewList from "@/app/ui/components/Reviews/ReviewList";
import {render} from "@testing-library/react";
import {Review} from "@/app/lib/types";
import {screen} from "@testing-library/react";

describe("ReviewList", () => {

  const sampleReviews = [
    {
      id: 1,
      bookId: "1",
      name: "Ultra Magnus",
      date: "2024/09/09",
      content: "Hmm. Grammar was a bit off, but not worthy of avoiding."
    }, {
      id: 2,
      bookId: "1",
      name: "Rodimus Prime",
      date: "2024/09/08",
      content: "I wish...."
    }
  ]

  it("renders an empty list", () => {
    const reviews: Review[] = [];
    render(<ReviewList reviews={reviews} />);
    expect(screen.getByTestId("reviews-container")).toBeInTheDocument();
  });

  it("renders a correct length list of reviews when data is passed", () => {
    render(<ReviewList reviews={sampleReviews} />);
    const items = screen.getAllByTestId("review");
    expect(items.length).toBe(2);
  });

  it("renders the correct review content", () => {
    const review = sampleReviews[0];  // Only render the first review
    render(<ReviewList reviews={[review]} />);

    expect(screen.getByTestId("name")).toHaveTextContent(review.name);
    expect(screen.getByTestId("content")).toHaveTextContent(review.content);
  });
});

