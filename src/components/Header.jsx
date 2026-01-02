const Header = ({ favoritesCount, setPage, search, setSearch, yearFilter, setYearFilter }) => (
  <header>
    <h1 onClick={() => setPage("home")}>MIS PELICULAS</h1>
    <div className="header-right">
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
        <option value="">Todos los años</option>
        <option value="1999">1999</option>
        <option value="2010">2010</option>
        <option value="2014">2014</option>
      </select>
      <button onClick={() => setPage("favorites")}>
        Favoritas ({favoritesCount})
      </button>
    </div>
  </header>
);

export default Header;


