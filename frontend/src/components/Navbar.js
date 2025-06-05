// src/components/Navbar.js
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';

import './Navbar.scss';

const Navbar = ({ onSearch }) => {
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (onSearch) onSearch(term);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">MyShop</Link>
      </div>

      <div className="navbar-center">
        <input
          type="search"
          placeholder="Rechercher un produit..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="navbar-search"
        />
      </div>

      <div className="navbar-right">
        <Link to="/cart" className="cart-link" aria-label="Panier">
  <FaShoppingCart size={24} color="white" />
  {cartItems.length > 0 && (
    <span className="cart-count">{cartItems.length}</span>
  )}
</Link>

        {user ? (
          <>
            <span className="navbar-user">Bonjour, {user.username}</span>
            <button onClick={handleLogout} className="btn-logout">Déconnexion</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn-login">Connexion</Link>
            <Link to="/register" className="btn-register">Inscription</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
