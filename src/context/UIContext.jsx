import React, { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    if (isCartOpen) setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(prev => !prev);
  };

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setIsCartOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <UIContext.Provider
      value={{
        isMobileMenuOpen,
        isCartOpen,
        isSearchOpen,
        notification,
        toggleMobileMenu,
        toggleCart,
        toggleSearch,
        showNotification,
        closeAll
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within UIProvider');
  }
  return context;
};
