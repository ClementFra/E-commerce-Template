import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import './Home.scss';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Erreur fetch produits :', err));
  }, []);

  return (
    <div className="home">
      <header className="home-header">
        <h1>Bienvenue dans notre boutique</h1>
        <p>Découvrez nos produits exclusifs sélectionnés rien que pour vous.</p>
      </header>

      <section className="products-section">
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
