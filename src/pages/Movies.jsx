import MovieList from "../components/MovieList";

export default function Movies(props) {
  const { movies } = props;
  return (
    <div className="movie-page">
      <h2>Filmler</h2>
      <MovieList movies={movies} />
    </div>
  );
}
