"use client"

import React, { createContext, useState, useContext, ReactNode } from 'react';

export const Colors = { 
  light: { 
    text: "#000000", 
    background: "#ffffff", 
    tint: "#ffb941", 
    icon: "#000000", 
    tabIconDefault: "#a3a3a3", 
    tabIconSelected: "#000000", 
  }, 
  dark: { 
    text: "#ffffff", 
    background: "#000000", 
    tint: "#ffb941", 
    icon: "#ffffff", 
    tabIconDefault: "#a3a3a3", 
    tabIconSelected: "#ffffff", 
  }
};

type ThemeType = 'light' | 'dark';
type ThemeContextType = {
  theme: ThemeType;
  colors: typeof Colors.light;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const colors = theme === 'light' ? Colors.light : Colors.dark;

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};