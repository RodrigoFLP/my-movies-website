import { Recommendations } from "../components/Details/Recommendations";
import { Actors } from "../components/Details/Actors";
import { MovieDetails } from "../components/Details/MovieDetails";

import recommendations from "../mock/recommendations.json";
import movieDetail from "../mock/movieDetail.json";
import credits from "../mock/credits.json";

import styles from "../styles/MovieDetails.module.css";

export const DetailsPage = () => {
  return (
    <div className={styles.main}>
      <MovieDetails {...movieDetail} />
      <Actors {...credits} />
      <Recommendations {...recommendations} />
    </div>
  );
};

export default DetailsPage;
