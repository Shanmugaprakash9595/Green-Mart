import React from "react";
import "./header.css";
import { FaHeart, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";


function Header() {
  return (
    <header className="header">
      <div className="logo">Green Mart</div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
      </nav>
        <div className="search-box">
          <input type="search" placeholder="Search products..." />
          <button>Search</button>
        </div>

        <div className="actions">
          <div className="icon">
            <FaHeart />
            <span className="count"></span>
          </div>
          <div className="icon">
            <FaShoppingCart />
            <span className="count"></span>
          </div>
          <div className="icon">
            <FaUser />
          </div>
        </div>

  
    </header>
  );
}

export default Header;
