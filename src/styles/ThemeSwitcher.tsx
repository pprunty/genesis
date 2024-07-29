// components/ThemeSwitcher.js
'use client'; // Ensure this component is treated as a client component

import { useState } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.className = newTheme === 'dark' ? 'theme-dark' : '';
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
};

export default ThemeSwitcher;
