import styles from "../styles/MovieDetails.module.css";

import { Recommendations, Actors, MovieDetails } from "../components/Details";
import { Loading, Error } from "../components";

import useDetails from "../hooks/useDetails";
import { useParams } from "react-router-dom";

export const DetailsPage = () => {
  const { id } = useParams();

  const [isLoading, isError, isSuccess, recommendations, details, credits] =
    useDetails(id as string);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className={styles.main}>
      <MovieDetails {...details} />
      <Actors {...credits} />
      <Recommendations {...recommendations} />
    </div>
  );
};

export default DetailsPage;
