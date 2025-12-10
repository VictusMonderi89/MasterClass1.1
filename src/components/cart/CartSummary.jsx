import React from 'react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';
import './CartSummary.css';

const CartSummary = ({ showCheckout = true }) => {
  const { getTotal, getItemCount } = useCart();
  const total = getTotal();
  const itemCount = getItemCount();
  const shipping = total > 50 ? 0 : 5.99;
  const finalTotal = total + shipping;

  return (
    <div className="cart-summary">
      <h3 className="cart-summary-title">Resumen del pedido</h3>
      
      <div className="cart-summary-details">
        <div className="summary-row">
          <span>Subtotal ({itemCount} productos)</span>
          <span>${total.toFixed(2)}</span>
        </div>
        
        <div className="summary-row">
          <span>Envío</span>
          <span>{shipping === 0 ? 'GRATIS' : `$${shipping.toFixed(2)}`}</span>
        </div>
        
        {total > 0 && total < 50 && (
          <p className="free-shipping-notice">
            ¡Agrega ${(50 - total).toFixed(2)} más para envío gratis!
          </p>
        )}
        
        <div className="summary-row summary-total">
          <span>Total</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>
      </div>

      {showCheckout && itemCount > 0 && (
        <Button variant="primary" fullWidth size="lg">
          Proceder al pago
        </Button>
      )}
    </div>
  );
};

export default CartSummary;
