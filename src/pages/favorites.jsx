const Favorites = ({ favorites = [], removeFromFavorites, search = "", yearFilter = "" }) => {
  const filtered = favorites
    .filter(m => m.title && m.title.toLowerCase().includes(search.toLowerCase()))
    .filter(m => !yearFilter || (m.year && m.year.toString() === yearFilter.toString()));

  return (
    <div className="movies-container">
      {filtered.length === 0 ? (
        <p>No tienes películas favoritas que coincidan.</p>
      ) : (
        filtered.map((movie) => (
          <div key={movie.id} className="movie-card">
            {movie.image && (
              <div className="movie-img-container">
                <img src={movie.image} alt={movie.title} />
              </div>
            )}
            <h3>{movie.title} ({movie.year})</h3>
            <p>{movie.description?.length > 60 ? movie.description.slice(0,60) + "..." : movie.description}</p>
            <button onClick={() => removeFromFavorites(movie.id)}>❌ Quitar</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;




