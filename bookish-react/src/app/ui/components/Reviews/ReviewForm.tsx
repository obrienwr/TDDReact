"use client";

import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {addReview} from "@/app/lib/slices/reviews/thunks";
import {fetchBookDetails} from "@/app/lib/slices/bookDetails/thunks";
import {AppDispatch} from "@/app/lib/store";
import {useDispatch} from "react-redux";

export default function ReviewForm({bookId}: {bookId: string | undefined}) {
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  function handleSubmit() {
    dispatch(addReview({bookId: bookId || "", name: name, content: content}));
    dispatch(fetchBookDetails(String(bookId)));
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit();
    }} autoComplete={"off"}>
      <TextField
        name={"name"}
        label={"Name"}
        variant="outlined"
        margin="normal"
        data-testid={"review-form-name"}
        onChange={((e) => setName(e.target.value))}
        value={name}
      />
      <TextField
        name={"content"}
        label={"Content"}
        variant="outlined"
        margin="normal"
        data-testid={"review-form-content"}
        onChange={((e) => setContent(e.target.value))}
        value={content}
      />
      <Button
        type="submit"
        variant="contained"
        data-testid={"review-form-submit"}
        name={"submit"}
      >
        Submit
      </Button>
    </form>
  );
}

