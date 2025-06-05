import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ product, onAdd }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <div className="product-info">
      <h3>{product.name}</h3>
      <p className="price">{product.price.toFixed(2)} €</p>
      <button onClick={onAdd}>Ajouter au panier</button>
    </div>
  </div>
);

export default ProductCard;
