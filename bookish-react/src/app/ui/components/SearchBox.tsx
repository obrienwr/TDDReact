import {TextField} from "@mui/material";
import {AppDispatch} from "@/app/lib/store";
import {useDispatch} from "react-redux";
import {setTerm} from "@/app/lib/slices/bookList/bookListSlice";
import {fetchBooks} from "@/app/lib/slices/bookList/thunks";

export default function SearchBox({term, onSearch}: {term: string, onSearch: (term: string) => void}) {
  const dispatch = useDispatch<AppDispatch>();

  function handleSearch(term: string) {
    if (term && term.trim().length === 0) {
      return;
    }
    onSearch(term);
  }

  return (
    <TextField
      label={"Search"}
      value={term}
      data-test={'search'}
      onChange={(e) => handleSearch(e.target.value)}
      margin={"normal"}
      variant={"outlined"}
    />
  )
}