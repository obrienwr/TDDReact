"use client";

import {useEffect, useState} from 'react';
import {Book} from "@/app/lib/types";
import {fetchBooks} from "@/app/lib/data";
import {NotFoundError} from "rxjs";

export default function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchBooksWithLoadingAndError() {
      setError(false);
      setLoading(true);
      try {
        const booksResponse = await fetchBooks();
        setBooks(booksResponse);
      } catch (e) {
        setError(true);
        throw e;
      } finally {
        setLoading(false);
      }
    }

    fetchBooksWithLoadingAndError();
  }, []);

  return {books, loading, error};
}