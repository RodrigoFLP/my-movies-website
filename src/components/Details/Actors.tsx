import { FC } from "react";
import { UserCircle } from "tabler-icons-react";
import { Credits } from "../../interfaces/credits";

import styles from "../../styles/MovieDetails.module.css";
import Image from "../Image";
import Placeholder from "../Placeholder";

export const Actors: FC<Credits> = ({ cast }) => {
  if (cast.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2>Actors</h2>
      <div className={styles["actors-container"]}>
        {cast.map((person) => (
          <div className={styles.actor} key={person.id}>
            <div className={styles["actor-image-container"]}>
              {person.profile_path && (
                <Image
                  className={styles["actor-image"]}
                  src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                  thumb={`https://image.tmdb.org/t/p/w45${person.profile_path}`}
                />
              )}
              <Placeholder>
                <UserCircle size={64} strokeWidth={1.5} />
              </Placeholder>
            </div>
            <h4>{person.name}</h4>
            <h5>{person.character}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Actors;
