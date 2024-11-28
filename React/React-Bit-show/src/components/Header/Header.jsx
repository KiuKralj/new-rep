import React from "react";
import "./Header.css" 

function Header() {
  return (
    <header>
      <h1>BitShow</h1>
      <input type='search' className="search-input"/>
    </header>
  );
}

export default Header;
