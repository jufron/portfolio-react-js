import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (event) => {
      if(theme === "system"){
        setTheme(event.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;