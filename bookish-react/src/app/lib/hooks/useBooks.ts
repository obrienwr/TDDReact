"use client";

import {useEffect, useState} from 'react';
import {Book} from "@/app/lib/types";
import {fetchBooks} from "@/app/lib/data";
import {NotFoundError} from "rxjs";

export default function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [term, setTerm] = useState<string>("");

  useEffect(() => {
    async function fetchBooksWithLoadingAndError() {
      setError(false);
      setLoading(true);
      try {
        const booksResponse = await fetchBooks(term);
        setBooks(booksResponse);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchBooksWithLoadingAndError();
  }, [term]);

  return {books, loading, error, term, setTerm};
}