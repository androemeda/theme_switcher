// src/components/NavBar.js
import React from 'react';
import { useTheme } from '../ThemeContext';

function NavBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`flex justify-between items-center p-4 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
      <div className="text-2xl font-bold">Theme Switcher</div>
      <button
        className={`transition-all p-2 rounded-lg ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-yellow-500 text-black'} hover:scale-105`}
        onClick={toggleTheme}
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
}

export default NavBar;
