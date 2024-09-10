import {Review} from "@/app/lib/types";

export default function ReviewItem({review}: {review: Review}) {
  return (
    <div data-testid={"review"} className={"review"} key={review.id}>
      <div data-testid={"name"}>{review.name}</div>
      <p data-testid={"content"}>{review.content}</p>
    </div>
  )
}
