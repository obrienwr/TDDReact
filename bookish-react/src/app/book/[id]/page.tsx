"use client";

import useBook from "@/app/lib/hooks/useBook";

export default function Page({params}: { params: { id: string } }) {
  const id = params.id;
  const { book, loading, error } = useBook(id);

  return (
    <div className={"detail"}>
      <h2 className={"book-title"}>{book && book.name}</h2>
    </div>
  )
}
