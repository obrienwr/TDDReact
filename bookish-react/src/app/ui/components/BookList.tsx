import {Book} from "@/app/lib/types";

export default function BookList({books}: {books: Book[]}) {
  return (
    <div data-test="book-list">
      {books.map(book => (
        <div className="book-item" key={book.id}>
          <h2 className="title">{book.name}</h2>
        </div>
      ))}
    </div>
  )
}
