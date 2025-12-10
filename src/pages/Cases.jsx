import React from 'react';
import { useProducts } from '../context/ProductContext';
import ProductGrid from '../components/products/ProductGrid';
import './CategoryPage.css';

const Cases = () => {
  const { getProductsByCategory } = useProducts();
  const products = getProductsByCategory('cases');

  return (
    <div className="category-page">
      <div className="container">
        <div className="category-header">
          <h1 className="category-title">Cases</h1>
          <p className="category-description">
            Fundas y estuches protectores de alta calidad para mantener tu dispositivo seguro
          </p>
        </div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default Cases;
