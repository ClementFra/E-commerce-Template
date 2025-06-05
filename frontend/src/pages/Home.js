import React, { useEffect, useState, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';
import './Home.scss';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
      })
      .catch(console.error);
  }, []);

  const handleSearch = (term) => {
    const lowerTerm = term.toLowerCase();
    const filteredList = products.filter(p =>
      p.name.toLowerCase().includes(lowerTerm) ||
      p.description.toLowerCase().includes(lowerTerm)
    );
    setFiltered(filteredList);
  };

  return (
    <>
      {/* On pourrait passer handleSearch au Navbar si on modifie App.js */}
      <div className="product-grid">
        {filtered.length ? filtered.map(product => (
          <ProductCard
            key={product._id}
            product={product}
            onAdd={() => addToCart(product)}
          />
        )) : <p>Aucun produit trouvé</p>}
      </div>
    </>
  );
};

export default Home;
