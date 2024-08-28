import {Book} from "@/app/lib/types";
import {useState} from "react";
import {descriptionNeedsTruncation, getUIFriendlyBookDescription} from "@/app/ui/utils/BookUtils";


export default function BookDetail({book}: { book: Book | undefined }) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncation = descriptionNeedsTruncation(book?.description || "");

  return (
    <div className={"detail"}>
      <h2 className={"book-title"}>{book?.name}</h2>
      <p className={"book-description"} data-testid={"book-description"}>
        {getUIFriendlyBookDescription(book, expanded)}
      </p>
      {needsTruncation && <button data-testid={"description-expansion"} onClick={() => {
        setExpanded(!expanded);
      }}>
          Show {expanded ? "Less" : "More"}
      </button>}
    </div>
  )
}