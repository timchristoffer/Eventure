import React, { useState } from "react";
import './Searchbar.css';

const Searchbar = ({ onSearch, hosts, genres }) => {
  const [searchText, setSearchText] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedHost, setSelectedHost] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleSearchClick = () => {
    onSearch({
      searchText,
      minPrice: minPrice || 0,
      maxPrice: maxPrice || Infinity,
      startDate: startDate || null,
      endDate: endDate || null,
      host: selectedHost,
      genre: selectedGenre
    });
  };

  return (
    <div className="SearchbarDiv">
      <input
        className="textInput"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
      />
      
      <input
        className="minPriceInput"
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        placeholder="Min price"
      />
      <input
        className="maxPriceInput"
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        placeholder="Max price"
      />
      
      <input
        className="startDateInput"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        placeholder="Startdate"
      />
      <input
        className="endDateInput"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        placeholder="Enddate"
      />

      <select
        className="hostInput"
        value={selectedHost}
        onChange={(e) => setSelectedHost(e.target.value)}
      >
        <option value="">All Hosts</option>
        {hosts.map((host) => (
          <option key={host} value={host}>
            {host}
          </option>
        ))}
      </select>
      
      <select
        className="genreInput"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <button className="searchButton" onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default Searchbar;