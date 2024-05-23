// import css from './MovieReviewsItem.module.css';

export default function MovieReviewsItem({ review }) {
  return (
    <article>
      <h4>Author: {review.author}</h4>
      <p>{review.content}</p>
    </article>
  );
}