import './NavBar.css'
import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="navbar">
      <a href='#' className='menu-logo'>Sergio Fernández{["/>"]}</a>
      <button className="menu-icon" onClick={handleMenuClick}>
        <span className="menu-icon__line"></span>
        <span className="menu-icon__line"></span>
        <span className="menu-icon__line"></span>
      </button>
      <ul className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}

export default Navbar;
