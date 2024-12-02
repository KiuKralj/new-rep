import React from "react";
import "./Header.css";
import { useEffect, useState } from "react";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchResults = (query) => {
    if (query) {
      fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then((response) => response.json())
        .then((data) => setSearchResults(data));
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    fetchSearchResults(searchQuery);
  }, [searchQuery]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header>
      <h1>BitShow</h1>
      <div className="search-wrapper">
        <div>
          <input
            type="search"
            className="search-input"
            value={searchQuery}
            onChange={handleChange}
          />
        </div>
        {searchQuery && searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map((result) => (
              <div key={result.show.id} className="result-item">
                <h3>{result.show.name}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
