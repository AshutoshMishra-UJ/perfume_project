import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            🌸 Perfume Shop
          </Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#products">Collections</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
