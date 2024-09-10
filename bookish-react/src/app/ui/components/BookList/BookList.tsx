import {Book} from "@/app/lib/types";
import {Grid} from "@mui/material";
import BookCard from "@/app/ui/components/BookList/BookCard";

export default function BookList({books}: { books: Book[] }) {
  return (
    <div data-test="book-list">
      <Grid container spacing={3}>
        {books.map(book => (
          <BookCard book={book} key={book.id}/>
        ))}
      </Grid>
    </div>
  )
}
