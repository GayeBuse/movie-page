import Movies from '../pages/Movies';

export default function Main(props) {
  const { movies } = props;
  return (
    <>
      <div className="main-container">
        <Movies movies={movies} />
      </div>
    </>
  );
}
