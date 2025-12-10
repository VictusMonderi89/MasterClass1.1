import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import CartSidebar from '../cart/CartSidebar';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default MainLayout;
