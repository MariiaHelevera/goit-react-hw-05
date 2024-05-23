// import css from './MovieReviews.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../moviesAPI';
import MovieReviewsItem from '../MovieReviewsItem/MovieReviewsItem';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function MovieReviews() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchMovieCredits() {
      try {
        setLoading(true);
        setError(false);
        const reviews = await getMovieReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieCredits();
  }, [movieId, setLoading, setError]);
  return (
    <>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <MovieReviewsItem review={review} />
            </li>
          ))
        ) : (
          <p>We don&apos;t have any reviews for this movie</p>
        )}
      </ul>
      {loading && <Loader />}
      {error && <ErrorMessage message="Oops! Something went wrong. Try reloading." />}
    </>
  );
}

