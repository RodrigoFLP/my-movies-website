import { FC } from "react";
import { MovieCardProps } from "../interfaces/movies";
import { Star } from "tabler-icons-react";

import styles from "../styles/MovieCard.module.css";
import { toLocalDate } from "../utils/toLocalDate";
import { useNearScreen } from "../hooks/useNearScreen";

export const MovieCard: FC<MovieCardProps> = ({
  title,
  poster,
  releaseDate,
  overview,
  voteAverage,
}) => {
  const { elementRef, visible } = useNearScreen();

  return (
    <div className={styles.container} ref={elementRef}>
      <div className={styles["poster-container"]}>
        {visible && (
          <img
            className={styles.poster}
            src={`https://image.tmdb.org/t/p/w500${poster}`}
          />
        )}
      </div>
      <section className={styles.details}>
        <div className={styles.header}>
          <h4 className={styles.rating}>
            <Star size={10} fill={"black"} />
            {voteAverage}/10
          </h4>
        </div>
        <div className={styles["overview-container"]}>
          <h3 className={styles.title}>{title}</h3>
          <h4 className={styles.year}>{toLocalDate(releaseDate)}</h4>
          <p className={styles.overview}>{overview}</p>
        </div>
      </section>
    </div>
  );
};

export default MovieCard;
