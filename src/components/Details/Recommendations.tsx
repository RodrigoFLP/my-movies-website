import { FC } from "react";
import { Recommendations as RecomProps } from "../../interfaces/recommendations";
import MovieCard from "../MovieCard";

import styles from "../../styles/MovieDetails.module.css";

export const Recommendations: FC<RecomProps> = ({
  results,
  page,
  total_pages,
  total_results,
}) => {
  if (results.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2>Recommendations</h2>
      <div className={styles["recommendations-container"]}>
        {results.map((movie) => (
          <MovieCard
            key={movie.id}
            size="sm"
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            overview={movie.overview}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
          />
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
