import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.images?.[0] || '/images/placeholder.jpg'} alt={item.name} />
      </div>
      
      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>

      <div className="cart-item-actions">
        <div className="cart-item-quantity">
          <button 
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="quantity-btn"
            aria-label="Disminuir cantidad"
          >
            -
          </button>
          <span className="quantity-value">{item.quantity}</span>
          <button 
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="quantity-btn"
            aria-label="Aumentar cantidad"
          >
            +
          </button>
        </div>
        
        <button 
          onClick={() => removeItem(item.id)}
          className="cart-item-remove"
          aria-label="Eliminar producto"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
