import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <div>Chargement...</div>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="info">
        <h2>{product.name}</h2>
        <p className="price">{product.price} €</p>
        <p>{product.description}</p>
        <button>Ajouter au panier</button>
      </div>
    </div>
  );
};

export default ProductDetail;