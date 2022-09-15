import Layout from "../components/Layouts/Layout";
import MovieCard from "../components/MovieCard";
import styles from "../styles/MoviesContainer.module.css";

import popularMovies from "../mock/popularMovies.json";

export const HomePage = () => {
  return (
    <Layout>
      <h2>Popular</h2>
      <section className={styles.container}>
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
      </section>
    </Layout>
  );
};

export default HomePage;
