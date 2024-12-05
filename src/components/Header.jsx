// src/components/Header.js
import React from 'react';
import { useTheme } from '../ThemeContext';

function Header() {
  const { theme } = useTheme();

  return (
    <header className={`flex flex-col items-center justify-center py-16 ${theme === 'light' ? 'bg-blue-100 text-black' : 'bg-gray-800 text-white'}`}>
      <h1 className="text-5xl font-bold mb-4">Welcome to the Theme Switcher Project!</h1>
      <p className="text-xl max-w-2xl text-center">
        This simple project allows you to switch between light and dark modes seamlessly. It's designed to show how easily you can toggle between themes using React and the Context API. Enjoy exploring the features!
      </p>
    </header>
  );
}

export default Header;
