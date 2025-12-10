import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

const Dropdown = ({ trigger, children, align = 'left', className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`dropdown ${className}`} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <div className={`dropdown-menu dropdown-${align} fade-in-down`}>
          {children}
        </div>
      )}
    </div>
  );
};

export const DropdownItem = ({ children, onClick, className = '' }) => {
  return (
    <button className={`dropdown-item ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Dropdown;
