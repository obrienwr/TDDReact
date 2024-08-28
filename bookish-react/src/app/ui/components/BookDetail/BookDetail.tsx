import {Book} from "@/app/lib/types";


export default function BookDetail({book}: {book: Book | undefined}) {
  return (
    <div className={"detail"}>
      <h2 className={"books-title"}>{book && book.name}</h2>
      <p className={"book-description"}>{book?.description && book.description}</p>
    </div>
  )
}