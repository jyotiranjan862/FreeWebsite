import React, { useState } from 'react';
import '../CSS/Header.css';
import { Link } from 'react-router-dom';


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
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="about">About Us</Link></li>
          <li><Link to ="services">Services</Link></li>
          <li><Link to ="contact">Contact</Link></li>
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
