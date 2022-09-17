import { FC } from "react";

import styles from "../../styles/MovieDetails.module.css";

import {
  MovieDetail,
  ProductionCompany,
  SpokenLanguage,
} from "../../interfaces/movieDetail";

import { RatingChip, Placeholder } from "../index";
import { Movie } from "tabler-icons-react";
import { Button } from "../Buttons/Button";

import { toLocalDate } from "../../utils/toLocalDate";

import Image from "../Image";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { add, remove, selectMovies } from "../../store/slices/favoritesSlice";

const ProductionSection = ({
  title,
  items,
}: {
  title: string;
  items: ProductionCompany[];
}) => {
  if (items.length === 0) return null;

  return (
    <section>
      <h4>{title}</h4>
      <div className={styles["producers-container"]}>
        {items.map((company) => (
          <div key={company.id} className={styles.producer}>
            {company.name}
          </div>
        ))}
      </div>
    </section>
  );
};

const LanguagesSection = ({
  title,
  items,
}: {
  title: string;
  items: SpokenLanguage[];
}) => {
  if (items.length === 0) return null;

  return (
    <section>
      <h4>{title}</h4>
      <div className={styles["producers-container"]}>
        {items.map((language) => (
          <div
            key={language.name + language.english_name}
            className={styles.producer}
          >
            {language.name}
          </div>
        ))}
      </div>
    </section>
  );
};

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
        <Placeholder>
          <Movie size={128} strokeWidth={1} />
        </Placeholder>
        {poster_path && (
          <Image
            thumb={`https://image.tmdb.org/t/p/w92${poster_path}`}
            src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
            className={styles["image"]}
          />
        )}
      </div>
      <div className={styles["details-container"]}>
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
          ・{`${runtime} minutes`}
        </h5>
        <div className={styles.rating}>
          <RatingChip vote_average={vote_average} size="md" /> ・
          {`${vote_count} votes`}
        </div>
        <section className={styles["genres-container"]}>
          {genres.map((genre) => (
            <div key={genre.id} className={styles.chip}>
              {genre.name}
            </div>
          ))}
        </section>
        <p className={styles.overview}>{overview}</p>
        <ProductionSection title="Production" items={production_companies} />
        <LanguagesSection title="Languages" items={spoken_languages} />
      </div>
    </div>
  );
};

export default MovieDetails;
