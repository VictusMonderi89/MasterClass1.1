import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-content">
          <h1 className="about-title">Nosotros</h1>
          
          <div className="about-section">
            <h2>Nuestra Misión</h2>
            <p>
              En MobileShop nos dedicamos a ofrecer los mejores accesorios de protección para tus dispositivos móviles. 
              Creemos que cada dispositivo merece la mejor protección sin comprometer el estilo.
            </p>
          </div>

          <div className="about-section">
            <h2>Calidad Premium</h2>
            <p>
              Todos nuestros productos pasan por rigurosos controles de calidad. Trabajamos directamente con 
              fabricantes de confianza para garantizar que cada accesorio cumpla con los más altos estándares.
            </p>
          </div>

          <div className="about-section">
            <h2>Compromiso con el Cliente</h2>
            <p>
              Tu satisfacción es nuestra prioridad. Ofrecemos envíos rápidos, atención personalizada y garantía 
              en todos nuestros productos.
            </p>
          </div>

          <div className="about-features">
            <div className="feature">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3>Calidad Garantizada</h3>
              <p>Productos certificados</p>
            </div>
            <div className="feature">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3>Envío Rápido</h3>
              <p>Entrega en 24-48h</p>
            </div>
            <div className="feature">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              <h3>Devoluciones Fáciles</h3>
              <p>30 días de garantía</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
