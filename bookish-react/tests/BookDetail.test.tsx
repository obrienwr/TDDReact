import React from "react";
import {screen, fireEvent, render} from "@testing-library/react";
import {describe, expect, test} from '@jest/globals';

import BookDetail from "@/app/ui/components/BookDetail/BookDetail";
import customRender from "./testUtilities/customRender";
import {MAX_DESCRIPTION_LENGTH_DEFAULT} from "@/app/ui/utils/BookUtils";

describe('BookDetail', () => {
  const book = {
    name: 'Transformers: More Than Meets the Eye Volume 1',
    id: '1',
    description: "The gayest of the robots in disguise."
  };
  const longDescription = "a".repeat(MAX_DESCRIPTION_LENGTH_DEFAULT + 1);
  const bookWithLongDescription = {
    ...book,
    description: longDescription
  };
  const sampleReview = {
    id: 1,
    bookId: "1",
    name: "Ultra Magnus",
    date: "2024/09/09",
    content: "Hmm. Grammar was a bit off, but not worthy of avoiding."
  };
  const bookWithReview = {
    ...book,
    reviews: [sampleReview]
  };

  it('Renders with the correct title in the heading', async () => {
    customRender(<BookDetail book={book} />);
    const heading = screen.getByRole('heading');
    expect(heading.innerHTML).toEqual(book.name);
  });

  it('Renders with the correct description', async () => {
    customRender(<BookDetail book={book} />);

    const description = screen.getByText(book.description);
    expect(description).toBeInTheDocument();
  });

  it('Displays the book name in the description field when no description is provided', async () => {
    const bookWithoutDescription = {
      ...book,
      description: undefined
    };
    customRender(<BookDetail book={bookWithoutDescription} />);

    const description = screen.getByTestId('book-description');
    expect(description.innerHTML).toEqual(bookWithoutDescription.name);
  });

  it('Renders an empty description for an undefined book', () => {
    customRender(<BookDetail book={undefined} />);

    const description = screen.getByTestId('book-description');
    expect(description.innerHTML).toEqual("");
  });

  it('Shows a "show more" link when the description is too long', () => {
    // BookUtils contains the MAX_DESCRIPTION_LENGTH constant
    customRender(<BookDetail book={bookWithLongDescription} />);
    const description = screen.getByTestId('book-description');
    expect(description.innerHTML).toEqual(`${longDescription.slice(0, MAX_DESCRIPTION_LENGTH_DEFAULT)}...`);
    const showMoreButton = screen.getByTestId('description-expansion');
    expect(showMoreButton).toBeInTheDocument();
  });

  it('Shows the full description when the "show more" link is clicked', () => {
    customRender(<BookDetail book={bookWithLongDescription} />);
    const showMoreButton = screen.getByTestId('description-expansion');
    fireEvent.click(showMoreButton);
    const description = screen.getByTestId('book-description');
    expect(description.innerHTML).toEqual(longDescription);
  });

  it("renders reviews when provided", () => {
    customRender(<BookDetail book={bookWithReview} />);
    const reviews = screen.getAllByTestId("review");
    expect(reviews.length).toBe(bookWithReview.reviews.length);
    expect(reviews[0].innerHTML).toEqual(bookWithReview.reviews[0].content);
  });

  it("renders a review form", () => {
    customRender(<BookDetail book={book} />);
    const nameInput = screen.getByTestId("review-form-name");
    const contentInput = screen.getByTestId("review-form-content");
    const submitButton = screen.getByTestId("review-form-submit");
    expect(nameInput).toBeInTheDocument();
    expect(contentInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

});
