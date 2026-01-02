const MovieCard = ({ movie, addToFavorites }) => (
  <div className="movie-card">
    <div className="movie-img-container">
      <img src={movie.image} alt={movie.title} />
    </div>
    <h3>{movie.title} ({movie.year})</h3>
    <p>{movie.description.length > 60 ? movie.description.slice(0,60)+'...' : movie.description}</p>
    <button onClick={() => addToFavorites(movie)}>❤️ Favorita</button>
  </div>
);

export default MovieCard;

