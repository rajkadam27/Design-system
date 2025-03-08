import React, { createContext, useContext, useState } from 'react';
import theme from './material-theme.json';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [selectedThemeColor, setSelectedThemeColor] = useState('primary');
  const schemeColors = theme.schemes.light; // Adjust based on your needs
  const getColorValue = (colorKey) => schemeColors[colorKey] || '#000000'; // Fallback color

  return (
    <ThemeContext.Provider value={{ selectedThemeColor, setSelectedThemeColor, schemeColors, getColorValue }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};