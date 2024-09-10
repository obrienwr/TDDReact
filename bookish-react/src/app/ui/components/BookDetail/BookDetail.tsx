import {Book} from "@/app/lib/types";
import {useState} from "react";
import {descriptionNeedsTruncation, getUIFriendlyBookDescription} from "@/app/ui/utils/BookUtils";
import ReviewList from "@/app/ui/components/Reviews/ReviewList";
import ReviewForm from "@/app/ui/components/Reviews/ReviewForm";

export default function BookDetail({book}: { book: Book | undefined }) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncation = descriptionNeedsTruncation(book?.description || "");

  return (
    <div className={"detail"}>
      {/* Heading */}
      <h2 className={"book-title"}>{book?.name}</h2>

      {/* Description */}
      <p className={"book-description"} data-testid={"book-description"}>
        {getUIFriendlyBookDescription(book, expanded)}
      </p>
      {needsTruncation && <button data-testid={"description-expansion"} onClick={() => {
        setExpanded(!expanded);
      }}>
          Show {expanded ? "Less" : "More"}
      </button>}

      {/* Review Form */}
      <ReviewForm data-testid={"review-form"} bookId={book?.id}/>

      {/* Reviews */}
      {book?.reviews && <ReviewList reviews={book.reviews}/>}
    </div>
  )
}