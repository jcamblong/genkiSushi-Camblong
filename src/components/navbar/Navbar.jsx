import React, { useState } from "react";
import "./Navbar.css";
import CartWidget from '../cart/CartWidget';

const Navbar = () => {
  return (
      <header className="header">

        <a href="#" className="logo">GEN<span>KI SU</span>SHI </a>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#popular">Menu</a>
          <a href="#about">Nosotros</a>
          <a href="#order">Contacto</a>
        </nav>

        <CartWidget />

      </header>
  );
};

export default Navbar;