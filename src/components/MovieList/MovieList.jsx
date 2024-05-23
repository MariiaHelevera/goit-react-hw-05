import css from "./MovieList.module.css";
import { Link, useLocation } from 'react-router-dom';

export default function MovieList({ movies }) {
    const location = useLocation();

    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link className={css.movieItem} to={`/movies/${movie.id}`} state={{ from: location }}>
                        {movie.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
    
}