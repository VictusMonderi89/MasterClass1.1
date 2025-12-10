import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ProductDetail from '../components/products/ProductDetail';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { getProductById } = useProducts();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="container">
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h2>Producto no encontrado</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetailPage;
