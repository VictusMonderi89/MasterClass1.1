import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUI } from '../../context/UIContext';
import Dropdown, { DropdownItem } from '../ui/Dropdown';
import './Navigation.css';

const Navigation = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useUI();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  const brandLinks = [
    { name: 'Samsung', path: '/marcas/samsung' },
    { name: 'Xiaomi', path: '/marcas/xiaomi' },
    { name: 'Motorola', path: '/marcas/motorola' },
    { name: 'Oppo', path: '/marcas/oppo' },
  ];

  return (
    <nav className={`navigation ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="container">
        <ul className="nav-list">
          {/* Menús principales */}
          <li className="nav-item">
            <Link 
              to="/cases" 
              className={`nav-link ${isActive('/cases') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Cases
            </Link>
          </li>
          
          <li className="nav-item">
            <Link 
              to="/micas" 
              className={`nav-link ${isActive('/micas') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Micas
            </Link>
          </li>
          
          <li className="nav-item">
            <Link 
              to="/protectores" 
              className={`nav-link ${isActive('/protectores') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Protectores
            </Link>
          </li>

          {/* Submenú Marcas - Desktop */}
          <li className="nav-item desktop-only">
            <Dropdown
              align="left"
              trigger={
                <button className="nav-link nav-dropdown-trigger">
                  Marcas
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              }
            >
              {brandLinks.map(brand => (
                <DropdownItem key={brand.path}>
                  <Link to={brand.path} className="dropdown-link">
                    {brand.name}
                  </Link>
                </DropdownItem>
              ))}
            </Dropdown>
          </li>

          {/* Submenú Marcas - Mobile */}
          <li className="nav-item mobile-only">
            <div className="nav-submenu">
              <span className="nav-submenu-title">Marcas</span>
              <ul className="nav-submenu-list">
                {brandLinks.map(brand => (
                  <li key={brand.path}>
                    <Link 
                      to={brand.path} 
                      className={`nav-sublink ${isActive(brand.path) ? 'active' : ''}`}
                      onClick={handleLinkClick}
                    >
                      {brand.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* iPhone */}
          <li className="nav-item">
            <Link 
              to="/iphone" 
              className={`nav-link ${isActive('/iphone') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              iPhone
            </Link>
          </li>

          {/* About */}
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Nosotros
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
