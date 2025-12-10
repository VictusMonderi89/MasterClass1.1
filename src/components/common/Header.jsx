import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import SearchBar from '../ui/SearchBar';
import { useCart } from '../../context/CartContext';
import { useUI } from '../../context/UIContext';
import { useProducts } from '../../context/ProductContext';
import Badge from '../ui/Badge';
import './Header.css';

const Header = () => {
  const { getItemCount } = useCart();
  const { toggleCart, toggleMobileMenu, isMobileMenuOpen } = useUI();
  const { updateFilters } = useProducts();
  const itemCount = getItemCount();

  const handleSearch = (query) => {
    updateFilters({ search: query });
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <Link to="/" className="logo">
              <h1 className="logo-text">MOBILE<span className="logo-accent">SHOP</span></h1>
            </Link>

            {/* Search Desktop */}
            <div className="header-search desktop-only">
              <SearchBar onSearch={handleSearch} />
            </div>

            {/* Actions */}
            <div className="header-actions">
              {/* Cart */}
              <button 
                className="header-action-btn" 
                onClick={toggleCart}
                aria-label="Carrito de compras"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {itemCount > 0 && (
                  <Badge variant="primary" size="sm" className="cart-badge">
                    {itemCount}
                  </Badge>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button 
                className="header-action-btn mobile-menu-btn mobile-only" 
                onClick={toggleMobileMenu}
                aria-label="Menú"
              >
                {isMobileMenuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Mobile */}
      <div className="header-search-mobile mobile-only">
        <div className="container">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
    </header>
  );
};

export default Header;
