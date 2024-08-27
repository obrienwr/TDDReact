"use client";

import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography"
import axios from "axios"

import {Book} from "@/app/lib/types"
import BookList from "@/app/BookList"

export default function Home() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    axios.get('http://localhost:8080/books')
      .then(response => setBooks(response.data))
  }, []);

  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookList books={books} />
    </div>
  );
}
