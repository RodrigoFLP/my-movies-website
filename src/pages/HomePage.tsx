import styles from "../styles/MoviesContainer.module.css";

import { usePopularMoviesQuery } from "../store/services/movies";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Error, MovieCard, Loading, Pagination } from "../components";

export const HomePage = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const navigate = useNavigate();

  const {
    isLoading,
    isUninitialized,
    isError,
    isFetching,
    data: movies,
  } = usePopularMoviesQuery(page);

  const nextPage = () => {
    const newPage = page
      ? +page !== movies?.total_pages
        ? +page + 1
        : +page
      : 2;
    navigate(`/?page=${newPage}`);
  };

  const previousPage = () => {
    const newPage = page && +page > 1 ? +page - 1 : 1;
    navigate(`/?page=${newPage}`);
  };

  if (isLoading || isUninitialized) return <Loading />;

  if (isError) return <Error />;

  return (
    <>
      <div className={styles.header}>
        <h2>Popular</h2>
        <Pagination
          currentPage={page}
          total={movies.total_pages}
          onPrevious={previousPage}
          onNext={nextPage}
        />
      </div>
      {isFetching ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export default HomePage;
