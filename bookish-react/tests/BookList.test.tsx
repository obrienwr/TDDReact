import React from "react";
import {screen} from "@testing-library/react";
import {describe, expect, test} from '@jest/globals';

import BookList from "@/app/ui/components/BookList/BookList";
import {Book} from "@/app/lib/types";
import {sample} from "rxjs";
import customRender from "./testUtilities/customRender";

describe('BookList', () => {
  const books: Book[] = [
    {name: 'Refactoring', 'id': '1'},
    {name: 'Domain-driven design', 'id': '2'}
  ]

  beforeEach(() => {
    customRender(<BookList books={books} />);
  })

  it('renders books', async () => {
    const headings = await screen.findAllByRole('heading');

    headings.forEach((heading, index) => {
      expect(heading).toHaveTextContent(books[index].name);
    });
  });

  it('renders links to book details', async () => {
    const links = await screen.findAllByRole('link');

    links.forEach((link, index) => {
      expect(link).toHaveAttribute('href', `/books/${books[index].id}`);
    });
  });
});
