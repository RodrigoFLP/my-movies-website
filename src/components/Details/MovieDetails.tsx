import { FC } from "react";

import { MovieDetail } from "../../interfaces/movieDetail";
import { Button } from "../Buttons/Button";
import { toLocalDate } from "../../utils/toLocalDate";
import { Star } from "tabler-icons-react";

import styles from "../../styles/MovieDetails.module.css";
import Image from "../Image";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { add, remove, selectMovies } from "../../store/slices/favoritesSlice";

export const MovieDetails: FC<MovieDetail> = (details) => {
  const {
    title,
    release_date,
    poster_path,
    status,
    runtime,
    vote_average,
    vote_count,
    genres,
    production_companies,
    spoken_languages,
    overview,
  } = details;

  const dispatch = useAppDispatch();

  const favorites = useAppSelector(selectMovies);

  const isFavorite = favorites.find((movie) => movie.id === details.id);

  return (
    <div className={styles.container}>
      <div className={styles["image-container"]}>
        <Image
          thumb={`https://image.tmdb.org/t/p/w92${poster_path}`}
          src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
          className={styles["image"]}
        />
      </div>
      <div className={styles["details-container"]}>
        <>
          <div className={styles.header}>
            <h2>{title}</h2>
            {!isFavorite ? (
              <Button onClick={() => dispatch(add(details))} size="sm">
                Add to favorites
              </Button>
            ) : (
              <Button onClick={() => dispatch(remove(details.id))} size="sm">
                Remove from favorites
              </Button>
            )}
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
        </>
      </div>
    </div>
  );
};

export default MovieDetails;
