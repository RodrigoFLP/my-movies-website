import { FC } from "react";
import { MovieCardProps } from "../interfaces/popularMovies";
import { Movie } from "tabler-icons-react";

import styles from "../styles/MovieCard.module.css";
import { toLocalDate } from "../utils/toLocalDate";
import { useNearScreen } from "../hooks/useNearScreen";
import { useNavigate } from "react-router-dom";
import Image from "./Image";
import { RatingChip } from "./RatingChip";
import Placeholder from "./Placeholder";

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
        {visible && poster && (
          <Image
            className={styles.poster}
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            thumb={`https://image.tmdb.org/t/p/w92${poster}`}
          />
        )}
      </div>
      <Placeholder>
        <Movie size={80} strokeWidth={1} />
      </Placeholder>
      <section className={styles.details}>
        <div className={styles.header}>
          <RatingChip vote_average={voteAverage} />
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
