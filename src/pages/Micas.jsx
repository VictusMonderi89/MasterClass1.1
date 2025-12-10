import React from 'react';
import { useProducts } from '../context/ProductContext';
import ProductGrid from '../components/products/ProductGrid';
import './CategoryPage.css';

const Micas = () => {
  const { getProductsByCategory } = useProducts();
  const products = getProductsByCategory('micas');

  return (
    <div className="category-page">
      <div className="container">
        <div className="category-header">
          <h1 className="category-title">Micas</h1>
          <p className="category-description">
            Protectores de pantalla premium con tecnología de última generación
          </p>
        </div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default Micas;
