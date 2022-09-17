import { useNavigate, useSearchParams } from "react-router-dom";

import { Pagination, MovieCard, Loading } from "../components";

import { useSearchQuery } from "../store/services/movies";

import { getPaginationRange } from "../utils/pagination";

import styles from "../styles/SearchPage.module.css";
import moviesContainer from "../styles/MoviesContainer.module.css";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const query = searchParams.get("query") as string;

  const navigate = useNavigate();

  const {
    isLoading,
    isFetching,
    isError,
    isUninitialized,
    data: movies,
  } = useSearchQuery({ query, page: page || undefined });

  const nextPage = () => {
    const newPage = page
      ? +page !== movies?.total_pages
        ? +page + 1
        : +page
      : 2;
    navigate(`/search?query=${query}&page=${newPage}`);
  };

  const previousPage = () => {
    const newPage = page && +page > 1 ? +page - 1 : 1;
    navigate(`/search?query=${query}&page=${newPage}`);
  };

  if (isLoading || isUninitialized) return <Loading />;

  if (isError || movies.total_results === 0)
    return <p>No movies matched your query</p>;

  const { start, end } = getPaginationRange(movies);

  return (
    <>
      <div className={styles.header}>
        <div className={styles["header-results"]}>
          <h3>Results for &quot;{query}&quot;</h3>
          <h4>
            {start} - {end} of {movies.total_results}
          </h4>
        </div>
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
        <section className={moviesContainer.container}>
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

export default SearchPage;
