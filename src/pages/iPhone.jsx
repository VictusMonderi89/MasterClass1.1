import React from 'react';
import { useProducts } from '../context/ProductContext';
import ProductGrid from '../components/products/ProductGrid';
import './CategoryPage.css';

const iPhone = () => {
  const { getProductsByBrand } = useProducts();
  const products = getProductsByBrand('iphone');

  return (
    <div className="category-page">
      <div className="container">
        <div className="category-header">
          <h1 className="category-title">iPhone</h1>
          <p className="category-description">
            Accesorios premium exclusivos para iPhone
          </p>
        </div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default iPhone;
