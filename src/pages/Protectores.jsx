import React from 'react';
import { useProducts } from '../context/ProductContext';
import ProductGrid from '../components/products/ProductGrid';
import './CategoryPage.css';

const Protectores = () => {
  const { getProductsByCategory } = useProducts();
  const products = getProductsByCategory('protectores');

  return (
    <div className="category-page">
      <div className="container">
        <div className="category-header">
          <h1 className="category-title">Protectores</h1>
          <p className="category-description">
            Protección especializada para cámara y todo tu dispositivo
          </p>
        </div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default Protectores;
