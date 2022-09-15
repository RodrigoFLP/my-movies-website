import Layout from "../components/Layouts/Layout";
import MovieCard from "../components/MovieCard";
import styles from "../styles/MoviesContainer.module.css";

import popularMovies from "../mock/popularMovies.json";

export const HomePage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        {popularMovies.results.map((movie) => (
          <MovieCard
            poster={movie.poster_path}
            title={movie.title}
            overview={movie.overview}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
            key={movie.id}
          />
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
