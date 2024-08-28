"use client";

import useBook from "@/app/lib/hooks/useBook";
import BookDetail from "@/app/ui/components/BookDetail/BookDetail";

export default function BookDetailContainer({bookId}: { bookId: string }) {
  const {book} = useBook(bookId);

  return (
    <BookDetail book={book}/>
  )
}