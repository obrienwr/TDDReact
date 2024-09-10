"use client";


import {useDispatch, useSelector} from "react-redux";
import {fetchBooks} from "@/app/lib/slices/bookList/thunks";
import type {AppDispatch, RootState} from "@/app/lib/store";
import BookList from "@/app/ui/components/BookList/BookList";
import useBooks from "@/app/lib/hooks/useBooks";
import SearchBox from "@/app/ui/components/SearchBox";
import {useEffect} from "react";

export default function BookListContainer() {
  const {term, setTerm} = useBooks();
  const {books} = useSelector((state: RootState) => ({
    books: state.list.books
  }));

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchBooks(term));
  }, [dispatch, term]);

  return (
    <>
      <SearchBox term={term} onSearch={(newTerm) => setTerm(newTerm)} />
      <BookList books={books}/>
    </>
  )
}