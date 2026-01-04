import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/favorites.jsx";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  useEffect(() => {
    const savedFavs = localStorage.getItem("favorites");
    if (savedFavs) setFavorites(JSON.parse(savedFavs));

    const savedSearch = localStorage.getItem("search");
    if (savedSearch) setSearch(savedSearch);

    const savedYear = localStorage.getItem("yearFilter");
    if (savedYear) setYearFilter(savedYear);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    localStorage.setItem("search", search);
    localStorage.setItem("yearFilter", yearFilter);
  }, [favorites, search, yearFilter]);

  const addToFavorites = (movie) => {
    if (!favorites.find((m) => m.id === movie.id)) {
      const favData = {
        id: movie.id,
        title: movie.title,
        year: movie.year,
        image: movie.image,
        description: movie.description
      };
      setFavorites([...favorites, favData]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((m) => m.id !== id));
  };

  return (
    <div className="app-container">
      <Header
        favoritesCount={favorites.length}
        setPage={setPage}
        search={search}
        setSearch={setSearch}
        yearFilter={yearFilter}
        setYearFilter={setYearFilter}
      />
      {page === "home" ? (
        <Home addToFavorites={addToFavorites} search={search} yearFilter={yearFilter} />
    ) : (
      <Favorites
        favorites={favorites}
        removeFromFavorites={removeFromFavorites}
        search={search}
        yearFilter={yearFilter}
      />
    )}

    </div>
  );
}

export default App;


