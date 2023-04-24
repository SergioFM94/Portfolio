import React, { useState } from "react";
import App from "../App.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="logo">
        <a href="#">Logo</a>
      </div>
      <div className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Sobre Mi</a>
        </li>
        <li>
          <a href="#">Proyectos</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
