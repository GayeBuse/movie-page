export default function Movie(props) {
  const { movie } = props;
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>Yönetmen:{movie.director}</p>
      {movie.cast != '' && <p>Oyuncular:{movie.cast}</p>}
    </div>
  );
}
