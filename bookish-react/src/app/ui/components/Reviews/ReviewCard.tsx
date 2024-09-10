import {Review} from "@/app/lib/types";

export default function ReviewCard({review}: {review: Review}) {
  return <div data-testid={"review"}>
    {review.content}
  </div>
}
