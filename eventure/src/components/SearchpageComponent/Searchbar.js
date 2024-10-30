import React, { useState } from "react";

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
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
      />
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        placeholder="Min price"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        placeholder="Max price"
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        placeholder="Start date"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        placeholder="End date"
      />
      <select
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
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default Searchbar;