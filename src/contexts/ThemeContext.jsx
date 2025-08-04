import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    setDarkMode(false);
    document.documentElement.classList.remove('dark');
  } else {
    // Default to dark mode
    setDarkMode(true);
    document.documentElement.classList.add('dark');
    if (!savedTheme) {
      localStorage.setItem('theme', 'dark');
    }
  }
}, []);


  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
