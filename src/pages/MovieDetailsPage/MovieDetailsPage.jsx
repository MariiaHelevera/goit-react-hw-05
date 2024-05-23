import css from './MovieDetailsPage.module.css';
import clsx from 'clsx';
import { useEffect, useState, useRef, Suspense } from 'react';
import {
  useParams,
  Link,
  Outlet,
  NavLink,
  useLocation,
} from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { getMovieDetails } from '/src/moviesAPI.js';
import { HiArrowLeft } from 'react-icons/hi';

export default function MovieDetailsPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from);
    

    function linkClasses({ isActive }) {
        return clsx(css.infoLink, {
        [css.active]: isActive,
        });
    }
    
    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                setLoading(true);
                setError(false);
                const details = await getMovieDetails(movieId);
                setMovieDetails(details);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchMovieDetails();
    }, [movieId, setLoading, setError, location]);
    
    return (
        <>
            <Link className={css.backLink} to={backLinkRef.current ?? '/'}>   
                <HiArrowLeft />
                <p>Go back</p>
            </Link>
            {movieDetails !== null && (
                <div className={css.detailsWrapper}>
                    <div className={css.mainInfoWrapper}>

                        <img
                            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                            alt={movieDetails.title}
                            width="250"
                        />
                        
                        <div>
                            <h1>{movieDetails.title}</h1>
                            <p>User score: {movieDetails.vote_average.toFixed(2)}/10</p>
                            <h3>Overview</h3>
                            <p>{movieDetails.overview}</p>
                            <h3>Genres</h3>
                            <p>{movieDetails.genres.map(genre => genre.name).join(' ')}</p>
                        </div>
                    </div>
                
                    <div className={css.addInfoWrapper}>
                        <h3>Additional information</h3>
                        <ul>
                            <li>
                                <NavLink className={linkClasses} to="cast">
                                    Cast
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={linkClasses} to="reviews">
                                    Reviews
                                </NavLink>
                            </li>
                        </ul>
                        <div>
                            <Suspense fallback={<b>Loading page...</b>}>
                                <Outlet />
                            </Suspense>
                        </div>
                    </div>
                </div>
            )}
            {loading && movieDetails === null && <Loader />}
            {error && <ErrorMessage message="Oops! Something went wrong. Try reloading." />}
        </>
    );
}