import {Review} from "@/app/lib/types";
import ReviewItem from "@/app/ui/components/Reviews/ReviewItem";


export default function ReviewList({reviews}: {reviews: Review[]}){
  return (
    <div data-testid={"reviews-container"}>
      {reviews.map(review => <ReviewItem review={review} key={review.id} />)}
    </div>
  );
}