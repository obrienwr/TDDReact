import {Book} from "@/app/lib/types";
import Link from "next/link";

export default function BookList({books}: {books: Book[]}) {
  return (
    <div data-test="book-list">
      {books.map(book => (
        <div className="book-item" key={book.id}>
          <h2 className="title">{book.name}</h2>
          <Link href={`/book/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
}
