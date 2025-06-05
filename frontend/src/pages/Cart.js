// src/pages/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.scss';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) return <p>Votre panier est vide.</p>;

  return (
    <div className="cart-container">
      <h2>Votre Panier</h2>
      <ul className="cart-list">
        {cartItems.map(item => (
          <li key={item._id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-img" />
            <div>
              <h3>{item.name}</h3>
              <p>Quantité: {item.quantity}</p>
              <p>Prix unitaire: ${item.price.toFixed(2)}</p>
              <p>Sous-total: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item._id)}>Retirer</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total : ${totalPrice.toFixed(2)}</h3>
      <button onClick={clearCart}>Vider le panier</button>
    </div>
  );
};

export default Cart;
