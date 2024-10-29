import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><h1>Eventure</h1></Link>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/hosts">Hosts</Link>
        <Link to="/search">Search</Link>
        <Link to="/about">About</Link>
      </div>
      <div id="nav-icon3" className={isOpen ? 'open' : ''} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
