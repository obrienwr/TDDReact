export type Book = {
  id: string;
  name: string;
  description?: string;
  reviews?: Review[];
}

export type Review = {
  id: number;
  bookId: string;
  name: string;
  date: string;
  content: string;
}

export type AppStateType = { // application state, not App State University :)
  books: Book[];
  loading: boolean;
  error: boolean;
  term: string;
}

export type BookDetailType = {
  book: Book,
  loading: boolean,
  error: boolean
}

export type AddReviewRequest = {
  bookId: string;
  name: string;
  content: string;
}

export type UpdateReviewRequest = {
  bookId: string;
  reviewId: number;
  content: string;
}
