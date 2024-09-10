import {Review} from "@/app/lib/types";
import {useState} from "react";
import {AppDispatch} from "@/app/lib/store";
import {useDispatch} from "react-redux";
import {updateReview} from "@/app/lib/slices/reviews/thunks";

export default function ReviewItem({review}: { review: Review }) {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(review.content);
  const dispatch = useDispatch<AppDispatch>();

  let contentSection = <p data-testid={"content"}>{review.content}</p>;
  if (editing) {
    contentSection = (
      <textarea
        data-testid={"content-input"}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    )
  }

  function handleSubmitClick() {
    setEditing(!editing);
    if (content !== review.content) {
      dispatch(updateReview({bookId: review.bookId, reviewId: review.id, content: content}));
    }
  }

  return (
    <div data-testid={"review"} className={"review"} key={review.id}>
      <div data-testid={"name"}>{review.name}</div>
      {contentSection}
      <button onClick={handleSubmitClick}>{editing ? "Submit" : "Edit"}</button>
    </div>
  )
}
