// src/components/Main.js
import React from 'react';
import { useTheme } from '../ThemeContext';

function Main() {
  const { theme } = useTheme();

  return (
    <main className={`py-16 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Features of the Theme Switcher</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Smooth Transitions</h3>
            <p>Experience smooth transitions when switching between themes. The change happens instantly with no noticeable lag.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Easy Theme Toggle</h3>
            <p>Switch between light and dark modes with just one click! The app remembers your theme choice.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Tailwind CSS Powered</h3>
            <p>Built with Tailwind CSS, the app features beautiful and responsive designs that adapt to different screen sizes.</p>
          </div>
        </div>
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all">
            Explore More Features
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
