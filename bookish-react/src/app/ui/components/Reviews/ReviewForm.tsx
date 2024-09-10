"use client";

import {Button, TextField} from "@mui/material";
import {useState} from "react";

export default function ReviewForm({onSubmit}: {onSubmit: (name: string, content: string) => void}) {
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(name, content);
    }}>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        margin="normal"
        data-testid={"review-form-name"}
        onChange={((e) => setName(e.target.value))}
        value={name}
      />
      <TextField
        id="content"
        label="Content"
        variant="outlined"
        margin="normal"
        data-testid={"review-form-content"}
        onChange={((e) => setContent(e.target.value))}
        value={content}
      />
      <Button type="submit" variant="contained" data-testid={"review-form-submit"}>Submit</Button>
    </form>
  );
}

