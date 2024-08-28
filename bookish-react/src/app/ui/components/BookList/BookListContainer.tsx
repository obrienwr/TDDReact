"use client";

import BookList from "@/app/ui/components/BookList/BookList";
import useBooks from "@/app/lib/hooks/useBooks";
import {TextField} from "@mui/material";
import SearchBox from "@/app/ui/components/SearchBox";

export default function BookListContainer() {
  const {books, loading, error, term, setTerm} = useBooks();

  return (
    <>
      <SearchBox term={term} onSearch={(newTerm) => setTerm(newTerm)} />
      <BookList books={books}/>
    </>
  )
}