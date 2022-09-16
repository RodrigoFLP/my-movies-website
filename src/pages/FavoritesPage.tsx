import MovieCard from "../components/MovieCard";
import styles from "../styles/MoviesContainer.module.css";

import popularMovies from "../mock/popularMovies.json";

import Loading from "../components/Loading";
import { useAppSelector } from "../store/hooks";
import { selectMovies } from "../store/slices/favoritesSlice";

export const FavoritesPage = () => {
  const movies = useAppSelector(selectMovies);

  return (
    <>
      <h2>My Favorites</h2>
      <section className={styles.container}>
        {movies.map((movie) => (
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
      </section>
    </>
  );
};

export default FavoritesPage;
