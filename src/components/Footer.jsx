// src/components/Footer.js
import React from 'react';
import { useTheme } from '../ThemeContext';

function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`py-4 ${theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-900 text-white'}`}>
      <div className="text-center">
        <p>&copy; 2024 Theme Switcher Project. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
