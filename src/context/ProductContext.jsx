import React, { createContext, useContext, useState, useEffect } from 'react';
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';
import brandsData from '../data/brands.json';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [categories, setCategories] = useState(categoriesData);
  const [brands, setBrands] = useState(brandsData);
  const [filters, setFilters] = useState({
    category: null,
    brand: null,
    priceRange: [0, 100],
    search: '',
    sortBy: 'featured'
  });

  const getProductById = (id) => {
    return products.find(product => product.id === id);
  };

  const getProductsByCategory = (categorySlug) => {
    return products.filter(product => product.category === categorySlug);
  };

  const getProductsByBrand = (brandSlug) => {
    return products.filter(product => product.brand === brandSlug);
  };

  const getFeaturedProducts = () => {
    return products.filter(product => product.featured);
  };

  const filterProducts = () => {
    let filtered = [...products];

    if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    if (filters.brand) {
      filtered = filtered.filter(p => p.brand === filters.brand);
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
      );
    }

    filtered = filtered.filter(p => 
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Ordenar
    switch (filters.sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  };

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setFilters({
      category: null,
      brand: null,
      priceRange: [0, 100],
      search: '',
      sortBy: 'featured'
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        brands,
        filters,
        getProductById,
        getProductsByCategory,
        getProductsByBrand,
        getFeaturedProducts,
        filterProducts,
        updateFilters,
        resetFilters
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within ProductProvider');
  }
  return context;
};
