import React from "react";
import { render, screen, within } from "@testing-library/react";
import {describe, expect, test} from '@jest/globals';

import BookDetail from "@/app/ui/components/BookDetail/BookDetail";

describe('BookDetail', () => {

  const book = {
    name: 'Transformers: More Than Meets the Eye Volume 1',
    id: '1',
    description: "The gayest of the robots in disguise."
  };

  beforeEach(() => {
    render(<BookDetail book={book} />);
  });

  it('Renders with the correct title in the heading', async () => {
    const heading = screen.getByRole('heading');
    expect(heading.innerHTML).toEqual(book.name);
  });

  it('Renders with the correct description', async () => {
    const description = screen.getByText(book.description);
    expect(description).toBeInTheDocument();
  });

});
