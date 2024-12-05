import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      console.log('Menu Open State:', !prev); // Log state to check if it's toggling
      return !prev;
    });
  };

  return (
    <header className="header">
      <span>
        <img className="LogoHead" src="/logo.png" alt="Sherlock" />
      </span>
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Link to="/login" className="login-btn">Log In</Link>
      </nav>
      <button 
        className="menu-toggle" 
        aria-label="Toggle Menu" 
        onClick={toggleMenu}
      >
        ☰
      </button>
    </header>
  );
};

export default Header;
