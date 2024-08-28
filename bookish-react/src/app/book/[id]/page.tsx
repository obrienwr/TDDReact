"use client";

import useBook from "@/app/lib/hooks/useBook";
import {notFound} from "next/navigation";

export default function Page({params}: { params: { id: string } }) {
  const id = params.id;
  const { book, loading, error } = useBook(id);
  // if (error) {
  //   console.log('Erroring from book/[id]/')
  //   notFound()
  // }

  return (
    <div className={"detail"}>
      <h2 className={"book-title"}>{book && book.name}</h2>
    </div>
  )
}
