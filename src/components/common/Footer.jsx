import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">MOBILESHOP</h3>
            <p className="footer-text">
              Tu tienda de confianza para accesorios premium de dispositivos móviles.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Categorías</h4>
            <ul className="footer-links">
              <li><Link to="/cases">Cases</Link></li>
              <li><Link to="/micas">Micas</Link></li>
              <li><Link to="/protectores">Protectores</Link></li>
              <li><Link to="/iphone">iPhone</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Marcas</h4>
            <ul className="footer-links">
              <li><Link to="/marcas/samsung">Samsung</Link></li>
              <li><Link to="/marcas/xiaomi">Xiaomi</Link></li>
              <li><Link to="/marcas/motorola">Motorola</Link></li>
              <li><Link to="/marcas/oppo">Oppo</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Soporte</h4>
            <ul className="footer-links">
              <li><Link to="/about">Nosotros</Link></li>
              <li><Link to="/">Envíos</Link></li>
              <li><Link to="/">Devoluciones</Link></li>
              <li><Link to="/">Contacto</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} MobileShop. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
