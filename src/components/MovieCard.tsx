import { FC } from "react";
import { MovieCardProps } from "../interfaces/popularMovies";
import { Star } from "tabler-icons-react";

import styles from "../styles/MovieCard.module.css";
import { toLocalDate } from "../utils/toLocalDate";
import { useNearScreen } from "../hooks/useNearScreen";
import { Navigate, useNavigate } from "react-router-dom";
import Image from "./Image";

interface UIProp {
  size?: "sm" | "md";
}

export const MovieCard: FC<MovieCardProps & UIProp> = ({
  id,
  title,
  poster,
  releaseDate,
  overview,
  voteAverage,
  size = "md",
}) => {
  const { elementRef, visible } = useNearScreen();

  const navigate = useNavigate();

  return (
    <div
      className={`${styles.container} ${styles[`container-${size}`]}`}
      ref={elementRef}
      onClick={() => navigate(`/details/${id}`)}
    >
      <div className={styles["poster-container"]}>
        {visible && (
          <Image
            className={styles.poster}
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            thumb={`https://image.tmdb.org/t/p/w92${poster}`}
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
        <div
          className={`${styles["overview-container"]} ${
            styles[`overview-container-${size}`]
          }`}
        >
          <h3 className={styles.title}>{title}</h3>
          <h4 className={styles.year}>{toLocalDate(releaseDate)}</h4>
          {size === "md" && (
            <p className={`${styles.overview} ${styles[`overview-${size}`]}`}>
              {overview}
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default MovieCard;
