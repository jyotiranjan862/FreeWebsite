import React, { useState } from 'react';
import '../CSS/Header.css';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <span>
        <img className="Logo" src="/logo.png" alt="SherLock" />
      </span>
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#login" className="login-btn">Log In</a>
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
