import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useUI } from '../../context/UIContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import Button from '../ui/Button';
import './CartSidebar.css';

const CartSidebar = () => {
  const { items } = useCart();
  const { isCartOpen, toggleCart } = useUI();

  return (
    <>
      {isCartOpen && <div className="cart-overlay" onClick={toggleCart} />}
      
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2 className="cart-title">Carrito de compras</h2>
          <button 
            className="cart-close" 
            onClick={toggleCart}
            aria-label="Cerrar carrito"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="cart-content">
          {items.length === 0 ? (
            <div className="cart-empty">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p>Tu carrito está vacío</p>
              <Button variant="primary" onClick={toggleCart}>
                Continuar comprando
              </Button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              
              <div className="cart-footer">
                <CartSummary showCheckout={false} />
                <Link to="/checkout" onClick={toggleCart}>
                  <Button variant="primary" fullWidth size="lg">
                    Proceder al pago
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
