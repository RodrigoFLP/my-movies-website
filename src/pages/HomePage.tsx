import MovieCard from "../components/MovieCard";
import styles from "../styles/MoviesContainer.module.css";

import popularMovies from "../mock/popularMovies.json";
import {
  useCreditsQuery,
  useDetailsQuery,
  usePopularMoviesQuery,
  useRecommendationsQuery,
} from "../store/services/movies";
import Loading from "../components/Loading";

export const HomePage = () => {
  const {
    isLoading,
    isSuccess,
    isUninitialized,
    isError,
    isFetching,
    data: movies,
  } = usePopularMoviesQuery();

  if (isLoading || isUninitialized) return <Loading />;

  if (isError) return <div>Error</div>;

  return (
    <>
      <h2>Popular</h2>
      <section className={styles.container}>
        {movies.results.map((movie) => (
          <MovieCard
            key={movie.id}
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

export default HomePage;
