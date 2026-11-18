import { ReviewCard } from '../ReviewCard/ReviewCard';
import css from './ReviewList.module.css';

export default function ReviewList() {
  return (
    <ul className={css.reviewList}>
      {/* {reviews.map(review => ( */}
      <ReviewCard
      //   key={review.id}
      />
      <ReviewCard />
      {/* ))} */}
    </ul>
  );
}
