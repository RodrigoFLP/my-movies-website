import styles from "../styles/MoviesContainer.module.css";
import { MovieCard } from "../components";

import { useAppSelector } from "../store/hooks";
import { selectMovies } from "../store/slices/favoritesSlice";

export const FavoritesPage = () => {
  const movies = useAppSelector(selectMovies);

  return (
    <>
      <h2>My Favorites</h2>
      <section className={styles.container}>
        {movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              size={"sm"}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
              releaseDate={movie.release_date}
              voteAverage={movie.vote_average}
            />
          ))}
        {movies.length === 0 && <p>You don&apos;t have favorites yet</p>}
      </section>
    </>
  );
};

export default FavoritesPage;
