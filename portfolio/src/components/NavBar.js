import './NavBar.css'
import './Portada.css'
import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="navbar">
      <a href='#portada' className='menu-logo link-hover' id='portada'>Sergio Fernández{["/>"]}</a>
      <button className="menu-icon" onClick={handleMenuClick}>
        <span className="menu-icon__line"></span>
        <span className="menu-icon__line"></span>
        <span className="menu-icon__line"></span>
      </button>
      <ul className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
        <li><a href='#contacto' className='link-hover'>Contacto</a></li>
        <li><a href='#sobre-mi' className='link-hover'>Sobre Mi</a></li>
        <li><a href='#mis-trabajos' className='link-hover'>Mis Trabajos</a></li>
        <li>
          <a  download 
              href="Resume-Sergio-Fernández-Muyor.pdf"
              className='link-hover'
          > 
            Mi CV
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
