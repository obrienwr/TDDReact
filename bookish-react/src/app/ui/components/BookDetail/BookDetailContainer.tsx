"use client";

import useBook from "@/app/lib/hooks/useBook";
import BookDetail from "@/app/ui/components/BookDetail/BookDetail";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/app/lib/store";
import {useEffect} from "react";
import {fetchBookDetails} from "@/app/lib/slices/bookDetails/thunks";

export default function BookDetailContainer({bookId}: { bookId: string }) {
  const {book} = useSelector((state: RootState) => ({
    book: state.detail.book
  }));

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchBookDetails(bookId));
  }, [dispatch, bookId]);

  return (
    <BookDetail book={book}/>
  )
}