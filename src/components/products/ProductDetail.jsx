import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useUI } from '../../context/UIContext';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import './ProductDetail.css';

const ProductDetail = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { showNotification } = useUI();

  if (!product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    showNotification(`${quantity} x ${product.name} agregado al carrito`, 'success');
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-detail">
      <div className="product-detail-images">
        <div className="main-image-container">
          <img 
            src={product.images[selectedImage] || '/images/placeholder.jpg'}
            alt={product.name}
            className="main-image"
          />
          {discount > 0 && (
            <Badge variant="error" className="detail-discount-badge">
              -{discount}%
            </Badge>
          )}
        </div>
        {product.images.length > 1 && (
          <div className="image-thumbnails">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`${product.name} ${index + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="product-detail-info">
        <div className="detail-header">
          <h1 className="detail-title">{product.name}</h1>
          <div className="detail-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  className={`star ${i < Math.round(product.rating || 0) ? 'filled' : ''}`}
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="rating-text">{product.rating} ({product.reviews} opiniones)</span>
          </div>
        </div>

        <div className="detail-price">
          <span className="current-price">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        <div className="detail-description">
          <p>{product.description}</p>
        </div>

        {product.features && product.features.length > 0 && (
          <div className="detail-features">
            <h3>Características</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.colors && product.colors.length > 0 && (
          <div className="detail-colors">
            <h3>Colores disponibles</h3>
            <div className="color-options">
              {product.colors.map((color, index) => (
                <Badge key={index} variant="outline" size="md">
                  {color}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="detail-actions">
          <div className="quantity-selector">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="quantity-btn"
            >
              -
            </button>
            <span className="quantity-value">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="quantity-btn"
            >
              +
            </button>
          </div>
          <Button 
            variant="primary" 
            size="lg" 
            onClick={handleAddToCart}
            fullWidth
          >
            Agregar al carrito
          </Button>
        </div>

        <div className="detail-stock">
          {product.inStock ? (
            <Badge variant="success">En stock</Badge>
          ) : (
            <Badge variant="error">Sin stock</Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
