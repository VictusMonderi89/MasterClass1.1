import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useUI } from '../../context/UIContext';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const { showNotification } = useUI();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product);
    showNotification(`${product.name} agregado al carrito`, 'success');
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/producto/${product.id}`} className="product-card hover-lift">
      <div className="product-image-container">
        <img 
          src={product.images[0] || '/images/placeholder.jpg'} 
          alt={product.name}
          className="product-image"
        />
        {discount > 0 && (
          <Badge variant="error" size="sm" className="product-discount-badge">
            -{discount}%
          </Badge>
        )}
        {product.featured && (
          <Badge variant="primary" size="sm" className="product-featured-badge">
            Destacado
          </Badge>
        )}
      </div>
      
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                className={`star ${i < Math.round(product.rating || 0) ? 'filled' : ''}`}
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span className="reviews-count">({product.reviews || 0})</span>
        </div>

        <div className="product-price-container">
          <div className="product-prices">
            <span className="product-price">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="product-original-price">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>

        <Button 
          variant="primary" 
          fullWidth 
          size="sm"
          onClick={handleAddToCart}
        >
          Agregar al carrito
        </Button>
      </div>
    </Link>
  );
};

export default ProductCard;
