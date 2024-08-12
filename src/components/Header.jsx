import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">
          Online Shop
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search in Shop" />
          <button className="search-button">🔍</button>
        </div>
        <nav className="navigation">
          <Link to="/">Featured Items</Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/deals">Daily Deals</Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/new-products">New Products</Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
