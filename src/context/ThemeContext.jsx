import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const themes = {
    dark: {
      name: 'dark',
      // Основные цвета
      bg: 'bg-gray-900',
      text: 'text-gray-100',
      accent: 'text-orange-400',
      secondary: 'text-gray-400',
      
      // Навигация
      navBg: 'bg-gray-900/95',
      navText: 'text-gray-100',
      navBorder: 'border-gray-800',
      
      // Карточки
      cardBg: 'bg-gray-800/80',
      cardBorder: 'border-gray-700',
      cardText: 'text-gray-100',
      
      // Кнопки
      buttonPrimary: 'bg-orange-500 hover:bg-orange-600 text-white',
      buttonSecondary: 'bg-gray-700 hover:bg-gray-600 text-gray-100',
      
      // Градиенты
      gradient: 'from-gray-900 via-gray-800 to-gray-900',
      overlay: 'bg-black/60',
      
      // Особенности
      shadow: 'shadow-lg shadow-orange-500/10'
    },
    light: {
      name: 'light',
      // Основные цвета - приглушенные и элегантные
      bg: 'bg-amber-50',
      text: 'text-gray-800',
      accent: 'text-amber-600',
      secondary: 'text-gray-600',
      
      // Навигация
      navBg: 'bg-amber-50/95',
      navText: 'text-gray-800',
      navBorder: 'border-amber-200',
      
      // Карточки
      cardBg: 'bg-white/90',
      cardBorder: 'border-amber-200',
      cardText: 'text-gray-800',
      
      // Кнопки
      buttonPrimary: 'bg-amber-500 hover:bg-amber-600 text-white',
      buttonSecondary: 'bg-amber-100 hover:bg-amber-200 text-gray-800',
      
      // Градиенты
      gradient: 'from-amber-50 via-orange-50 to-amber-100',
      overlay: 'bg-white/40',
      
      // Особенности
      shadow: 'shadow-lg shadow-amber-400/20'
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    root.className = theme;
    document.body.className = `transition-all duration-500 ${themes[theme].bg} ${themes[theme].text}`;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      themeStyle: themes[theme], 
      toggleTheme,
      isDark: theme === 'dark'
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);