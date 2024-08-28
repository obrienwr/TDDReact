import Typography from "@mui/material/Typography"

import BookListContainer from "@/app/ui/components/BookList/BookListContainer"

export default function Home() {

  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookListContainer />
    </div>
  );
}
