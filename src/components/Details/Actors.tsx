import { FC } from "react";
import { Credits } from "../../interfaces/credits";

import styles from "../../styles/MovieDetails.module.css";

export const Actors: FC<Credits> = ({ cast }) => {
  return (
    <section className={styles.section}>
      <h2>Actors</h2>
      <div className={styles["actors-container"]}>
        {cast.map((person) => (
          <div className={styles.actor}>
            <img
              className={styles["actor-image"]}
              src={`https://image.tmdb.org/t/p/w1280${person.profile_path}`}
            ></img>
            <h4>{person.name}</h4>
            <h5>{person.character}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Actors;
