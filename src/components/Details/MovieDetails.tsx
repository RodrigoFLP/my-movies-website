import { FC } from "react";

import { MovieDetail } from "../../interfaces/movieDetail";
import { Button } from "../Buttons/Button";
import { toLocalDate } from "../../utils/toLocalDate";
import { Star } from "tabler-icons-react";

import styles from "../../styles/MovieDetails.module.css";

export const MovieDetails: FC<MovieDetail> = ({
  title,
  status,
  vote_average,
  overview,
  genres,
  spoken_languages,
  poster_path,
  release_date,
  production_companies,
  runtime,
  vote_count,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles["image-container"]}>
        <img
          className={styles["image"]}
          src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        ></img>
      </div>
      <div className={styles["details-container"]}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <Button size="sm">Add to favorites</Button>
        </div>
        <h5>
          {status === "Released"
            ? `Released on ${toLocalDate(release_date)}`
            : status}
          ・{runtime} minutes
        </h5>
        <div className={styles.rating}>
          <Star size={14} fill="black" />
          <span>{vote_average.toFixed(2)} / 10 </span>・{vote_count} votes
        </div>

        <div className={styles["genres-container"]}>
          {genres.map((genre) => (
            <div className={styles.chip}>{genre.name}</div>
          ))}
        </div>
        <p className={styles.overview}>{overview}</p>
        <h4>Production</h4>
        <section className={styles["producers-container"]}>
          {production_companies.map((company) => (
            <div className={styles.producer}>
              <span>{company.name}</span>
            </div>
          ))}
        </section>
        <h4>Languages</h4>
        <section className={styles["producers-container"]}>
          {spoken_languages.map((language) => (
            <div className={styles.producer}>
              <span>{language.name}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default MovieDetails;
