// context/ThemeContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Типизация для контекста
interface ThemeContextType {
  theme: 'light' | 'dark' | 'system';
  toggleTheme: () => void;
}

// Создание контекста с дефолтными значениями
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system'); // По умолчанию системная тема
  const [isMounted, setIsMounted] = useState(false);

  // Загружаем сохранённую тему или используем системную
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('system'); // По умолчанию — системная тема
    }
    setIsMounted(true);
  }, []);

  // Применение темы на странице
  useEffect(() => {
    if (theme === 'system') {
      document.body.removeAttribute('data-theme'); // Используем системную тему (предпочтения браузера)
    } else {
      document.body.setAttribute('data-theme', theme); // Устанавливаем тёмную или светлую тему
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Сохраняем выбор в localStorage
  };

  if (!isMounted) return null; // Чтобы избежать SSR-проблем с темой

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
