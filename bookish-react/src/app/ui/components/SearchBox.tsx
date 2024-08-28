import {TextField} from "@mui/material";
import {useDebouncedCallback} from 'use-debounce';


export default function SearchBox({
                                    term, onSearch, wait = 300
                                  }: {
  term: string, onSearch: (term: string) => void, wait?: number
}) {

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