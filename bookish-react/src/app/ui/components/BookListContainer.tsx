"use client";

import BookList from "@/app/ui/components/BookList";
import useBooks from "@/app/lib/hooks/useBooks";

export default function BookListContainer() {
  const {books, loading, error} = useBooks();
  return (
    <>
      <BookList books={books}/>
    </>
  )
}