import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "tabler-icons-react";
import IconButton from "../components/Buttons/IconButton";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import { useSearchQuery } from "../store/services/movies";

import moviesContainer from "../styles/MoviesContainer.module.css";

import styles from "../styles/SearchPage.module.css";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") as string;
  const page = searchParams.get("page");

  const navigate = useNavigate();

  const nextPage = () => {
    navigate(
      `/search?query=${query}&page=${
        page ? (+page !== movies?.total_pages ? +page + 1 : +page) : 2
      }`
    );
  };

  const previousPage = () => {
    navigate(
      `/search?query=${query}&page=${page && +page > 1 ? +page - 1 : 1}`
    );
  };

  const {
    isLoading,
    isFetching,
    isError,
    isSuccess,
    isUninitialized,
    data: movies,
  } = useSearchQuery({ query, page });

  if (isLoading || isFetching || isUninitialized) return <Loading />;

  if (isError) return <div>error</div>;

  const getFrom = () => {
    if (movies.total_pages === movies.page) {
      return movies.total_results - movies.results.length + 1;
    }
    return (movies.page - 1) * movies.results.length + 1;
  };

  const getTo = () => {
    if (movies.total_pages === movies.page) {
      return movies.total_results;
    }
    return movies.results.length * movies.page;
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles["header-results"]}>
          <h3>Results for &quot;{query}&quot;</h3>
          <h4>
            {getFrom()} - {getTo()} of {movies.total_results}
          </h4>
        </div>
        <div className={styles.pagination}>
          <IconButton onClick={previousPage} disabled={!page || +page === 1}>
            <ArrowLeft />
          </IconButton>
          <IconButton
            onClick={nextPage}
            disabled={+page === movies.total_pages}
          >
            <ArrowRight />
          </IconButton>
        </div>
      </div>
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
    </>
  );
};

export default SearchPage;
