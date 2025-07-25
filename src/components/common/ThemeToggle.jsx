import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext.jsx';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="relative inline-flex items-center justify-center w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      aria-label="Toggle dark mode"
    >
      {/* Toggle Slider */}
      <span
        className={`inline-block w-5 h-5 bg-white rounded-full shadow-lg transform transition-transform duration-300 ${
          darkMode ? 'translate-x-3' : '-translate-x-3'
        }`}
      >
        {/* Icon inside the slider */}
        <span className="flex items-center justify-center w-full h-full">
          {darkMode ? (
            <Moon size={12} className="text-gray-700" />
          ) : (
            <Sun size={12} className="text-yellow-500" />
          )}
        </span>
      </span>
    </button>
  );
};

export default ThemeToggle;
