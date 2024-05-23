// import css from './MovieCastItem.module.css';

export default function MovieCastItem({ actor }) {
  return (
    <article>
        <img
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              width="150"
        />
        <div>
            <h4>{actor.name}</h4>
            <p>
                <b>Character:</b>
                {" "}
                {actor.character}
            </p>
        </div>
    </article>
  );
}