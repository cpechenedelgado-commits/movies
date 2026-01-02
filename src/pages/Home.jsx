import MovieCard from "../components/MovieCard.jsx";

const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    image: "/public/images/inception.png",
    description: "Un ladrón que roba secretos a través de los sueños."
  },
  {
    id: 2,
    title: "The Matrix",
    year: 1999,
    image: "/public/images/matrix.png.webp",
    description: "Un hacker descubre la realidad detrás del mundo."
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    image: "/public/images/interstellar.png",
    description: "Exploración espacial para salvar a la humanidad."
  }
];

const Home = ({ addToFavorites, search, yearFilter }) => {
  const filtered = movies
    .filter((m) => m.title.toLowerCase().includes(search.toLowerCase()))
    .filter((m) => !yearFilter || m.year.toString() === yearFilter);

  return (
    <div className="movies-container">
      {filtered.length === 0 ? (
        <p>No se encontraron películas.</p>
      ) : (
        filtered.map((movie) => (
          <MovieCard key={movie.id} movie={movie} addToFavorites={addToFavorites} />
        ))
      )}
    </div>
  );
};

export default Home;

