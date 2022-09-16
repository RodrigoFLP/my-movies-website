import { Recommendations } from "../components/Details/Recommendations";
import { Actors } from "../components/Details/Actors";
import { MovieDetails } from "../components/Details/MovieDetails";

import styles from "../styles/MovieDetails.module.css";

import Loading from "../components/Loading";
import useDetails from "../hooks/useDetails";
import { useParams } from "react-router-dom";

export const DetailsPage = () => {
  const { id } = useParams();

  const [isLoading, isError, isSuccess, recommendations, details, credits] =
    useDetails(id as string);

  if (isLoading) return <Loading />;
  if (isError) return <div>error</div>;

  return (
    <div className={styles.main}>
      <MovieDetails {...details} />
      <Actors {...credits} />
      <Recommendations {...recommendations} />
    </div>
  );
};

export default DetailsPage;
