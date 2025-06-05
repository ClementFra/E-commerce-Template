import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="price">{product.price} €</div>
        <button>Ajouter au panier</button>
      </div>
    </div>
  );
};

export default ProductCard;
