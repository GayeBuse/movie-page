import Movie from './Movie';

export default function MovieList(props) {
  const { movies } = props;
  return (
    <div className="movie-container">
      {
        /* map movies */
        movies.map((item, index) => (
          <Movie key={index} movie={item} />
        ))
      }
    </div>
  );
}
