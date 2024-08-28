import {useEffect, useState} from "react";
import {Book} from "@/app/lib/types";
import {fetchBookById} from "@/app/lib/data";

export default function useBook(id: string) {
  const [book, setBook] = useState<Book>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchBook() {
      try {
        const book = await fetchBookById(id);
        setBook(book);
      } catch (e) {
        console.log(`Catching error in useBook: ${e}`);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchBook();
  }, [id]);

  return { book, loading, error };
}