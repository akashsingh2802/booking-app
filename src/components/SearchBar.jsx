import { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar({ hotels, setFilteredHotels }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    if (value === "") {
      setFilteredHotels(hotels);
      return;
    }

        const filtered = hotels.filter((hotel) =>
  hotel.name.toLowerCase().includes(value)
);

    setFilteredHotels(filtered);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="🔍 Search hotel by name or city..."
        className="search-input"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;