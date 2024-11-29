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
        .then((data) => setSearchResults(data))
    } else {
      setSearchResults([]);  
    }
  };

  useEffect(() => {
    fetchSearchResults(searchQuery);
  }, [searchQuery]);


  return (
    <header>
      <h1>BitShow</h1>
      <div className="search-wrapper">
        <div>
          <input type="search" className="search-input" 
          onChange={(e) => setSearchQuery(e.target.value)}   />
        </div>
        {searchQuery && (
          <div className="search-results">
            
          </div>
        )}
        
      </div>
    </header>
  );
}

export default Header;
