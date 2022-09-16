import MovieCard from "../components/MovieCard";
import styles from "../styles/MoviesContainer.module.css";

import popularMovies from "../mock/popularMovies.json";
import {
  useCreditsQuery,
  useDetailsQuery,
  usePopularMoviesQuery,
  useRecommendationsQuery,
} from "../store/services/movies";

export const HomePage = () => {
  const { isLoading, isSuccess, isUninitialized, isError, isFetching, data } =
    usePopularMoviesQuery();

  return (
    <>
      <h2>Popular</h2>
      <section className={styles.container}>
        {popularMovies.results.map((movie) => (
          <MovieCard
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            overview={movie.overview}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
            key={movie.id}
          />
        ))}
      </section>
    </>
  );
};

export default HomePage;
