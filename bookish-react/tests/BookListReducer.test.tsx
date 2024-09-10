import bookListReducer, {setTerm} from "@/app/lib/slices/bookList/bookListSlice";
import {expect} from "@jest/globals";

describe("bookListReducer", () => {
  const initalState = {
    term: "",
    books: [],
    loading: false,
    error: false
  };

  it("should handle setTerm action", () => {
    const action = setTerm("Refactoring");
    const newState = bookListReducer(initalState, action);

    expect(newState.term).toEqual("Refactoring");
  });
});