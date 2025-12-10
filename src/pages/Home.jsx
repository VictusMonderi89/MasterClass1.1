import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ProductGrid from '../components/products/ProductGrid';
import Button from '../components/ui/Button';
import './Home.css';

const Home = () => {
  const { getFeaturedProducts, categories } = useProducts();
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title fade-in-up">
              Protección Premium para tus Dispositivos
            </h1>
            <p className="hero-subtitle fade-in-up">
              Descubre nuestra colección de accesorios de alta calidad para móviles y tablets
            </p>
            <div className="hero-actions fade-in-up">
              <Link to="/cases">
                <Button variant="primary" size="lg">
                  Explorar productos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Categorías</h2>
          <div className="categories-grid">
            {categories.map(category => (
              <Link 
                key={category.id} 
                to={`/${category.slug}`} 
                className="category-card hover-lift"
              >
                <div className="category-image">
                  <div className="category-placeholder">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                      <line x1="7" y1="2" x2="7" y2="22" />
                      <line x1="17" y1="2" x2="17" y2="22" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <line x1="2" y1="7" x2="7" y2="7" />
                      <line x1="2" y1="17" x2="7" y2="17" />
                      <line x1="17" y1="17" x2="22" y2="17" />
                      <line x1="17" y1="7" x2="22" y2="7" />
                    </svg>
                  </div>
                </div>
                <div className="category-info">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Productos Destacados</h2>
          <ProductGrid products={featuredProducts.slice(0, 8)} />
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <div className="container">
          <h2 className="section-title">Marcas Disponibles</h2>
          <div className="brands-grid">
            <Link to="/marcas/samsung" className="brand-item">
              <span>Samsung</span>
            </Link>
            <Link to="/marcas/xiaomi" className="brand-item">
              <span>Xiaomi</span>
            </Link>
            <Link to="/marcas/motorola" className="brand-item">
              <span>Motorola</span>
            </Link>
            <Link to="/marcas/oppo" className="brand-item">
              <span>Oppo</span>
            </Link>
            <Link to="/iphone" className="brand-item brand-featured">
              <span>iPhone</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
