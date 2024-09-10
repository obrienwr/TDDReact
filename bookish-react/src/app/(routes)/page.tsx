import Typography from "@mui/material/Typography"
import { useRouter } from "next/router"

import BookListContainer from "@/app/ui/components/BookList/BookListContainer"

export default function Home() {
  return (
    <div className="App">

      <BookListContainer />
    </div>
  );
}
