"use client";

import {useEffect, useState} from 'react';
import {Book} from "@/app/lib/types";
import axios from "axios";

export default function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchBooks() {
      setError(false);
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:8080/books');
        setBooks(response.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  return {books, loading, error};
}