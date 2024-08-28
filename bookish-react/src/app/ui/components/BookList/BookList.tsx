import {Book} from "@/app/lib/types";
import Link from "next/link";
import {Card, CardActionArea, CardActions, CardContent, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {getUIFriendlyBookDescription} from "@/app/ui/utils/BookUtils";

export default function BookList({books}: { books: Book[] }) {
  return (
    <div data-test="book-list">
      <Grid container spacing={3}>
        {books.map(book => (
          <Grid item xs={4} sm={4} key={book.id} className={"book-item"}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant={"h5"} component={"h2"}>
                    {book.name}
                  </Typography>
                  <Typography variant={"body2"} color={"textSecondary"} component={"p"}>
                    {getUIFriendlyBookDescription(book, false)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={`/books/${book.id}`}>
                    View Details
                  </Link>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
