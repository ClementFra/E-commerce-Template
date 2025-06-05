import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">E-Shopping</h1>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/products">Produits</Link></li>
        <li><Link to="/login">Connexion</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;