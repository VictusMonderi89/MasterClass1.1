import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { UIProvider } from './context/UIContext';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Cases from './pages/Cases';
import Micas from './pages/Micas';
import Protectores from './pages/Protectores';
import iPhone from './pages/iPhone';
import BrandCategory from './pages/BrandCategory';
import ProductDetailPage from './pages/ProductDetailPage';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <ProductProvider>
        <CartProvider>
          <UIProvider>
            <MainLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cases" element={<Cases />} />
                <Route path="/micas" element={<Micas />} />
                <Route path="/protectores" element={<Protectores />} />
                <Route path="/iphone" element={<iPhone />} />
                <Route path="/marcas/:brand" element={<BrandCategory />} />
                <Route path="/producto/:id" element={<ProductDetailPage />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={
                  <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
                    <h1>404 - Página no encontrada</h1>
                  </div>
                } />
              </Routes>
            </MainLayout>
          </UIProvider>
        </CartProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;
