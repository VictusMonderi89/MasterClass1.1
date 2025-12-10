import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ProductGrid from '../components/products/ProductGrid';
import './CategoryPage.css';

const BrandCategory = () => {
  const { brand } = useParams();
  const { getProductsByBrand, brands } = useProducts();
  const products = getProductsByBrand(brand);
  const brandInfo = brands.find(b => b.slug === brand);

  return (
    <div className="category-page">
      <div className="container">
        <div className="category-header">
          <h1 className="category-title">
            {brandInfo?.name || brand}
          </h1>
          <p className="category-description">
            Accesorios de calidad para dispositivos {brandInfo?.name || brand}
          </p>
        </div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default BrandCategory;
