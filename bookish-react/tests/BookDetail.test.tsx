import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {describe, expect, test} from '@jest/globals';

import BookDetail from "@/app/ui/components/BookDetail/BookDetail";
import {MAX_DESCRIPTION_LENGTH} from "@/app/ui/utils/BookUtils";

describe('BookDetail', () => {

  const book = {
    name: 'Transformers: More Than Meets the Eye Volume 1',
    id: '1',
    description: "The gayest of the robots in disguise."
  };
  const longDescription = "a".repeat(MAX_DESCRIPTION_LENGTH + 1);
  const bookWithLongDescription = {
    ...book,
    description: longDescription
  }

  it('Renders with the correct title in the heading', async () => {
    render(<BookDetail book={book} />);
    const heading = screen.getByRole('heading');
    expect(heading.innerHTML).toEqual(book.name);
  });

  it('Renders with the correct description', async () => {
    render(<BookDetail book={book} />);

    const description = screen.getByText(book.description);
    expect(description).toBeInTheDocument();
  });

  it('Displays the book name in the description field when no description is provided', async () => {
    const bookWithoutDescription = {
      ...book,
      description: undefined
    };
    render(<BookDetail book={bookWithoutDescription} />);

    const description = screen.getByTestId('book-description');
    expect(description.innerHTML).toEqual(bookWithoutDescription.name);
  });

  it('Renders an empty description for an undefined book', () => {
    render(<BookDetail book={undefined} />);

    const description = screen.getByTestId('book-description');
    expect(description.innerHTML).toEqual("");
  });

  it('Shows a "show more" link when the description is too long', () => {
    // BookUtils contains the MAX_DESCRIPTION_LENGTH constant
    render(<BookDetail book={bookWithLongDescription} />);
    const description = screen.getByTestId('book-description');
    expect(description.innerHTML).toEqual(`${longDescription.slice(0, MAX_DESCRIPTION_LENGTH)}...`);
    const showMoreButton = screen.getByTestId('description-expansion');
    expect(showMoreButton).toBeInTheDocument();
  });

  it('Shows the full description when the "show more" link is clicked', () => {
    render(<BookDetail book={bookWithLongDescription} />);
    const showMoreButton = screen.getByTestId('description-expansion');
    fireEvent.click(showMoreButton);
    const description = screen.getByTestId('book-description');
    expect(description.innerHTML).toEqual(longDescription);
  });

});
