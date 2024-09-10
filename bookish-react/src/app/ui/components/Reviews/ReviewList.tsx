import {Review} from "@/app/lib/types";
import ReviewCard from "@/app/ui/components/Reviews/ReviewCard";


export default function ReviewList({reviews}: {reviews: Review[]}){
  return (
    <div data-testid={"reviews-container"}>
      {reviews.map(review => <ReviewCard review={review} key={review.id} />)}
    </div>
  );
}