// ThemeProvider.jsx
import React from 'react';
import themeData from './material-theme.json'

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const colors = {
    ...themeData.schemes.light, // Default to light scheme
    allColors: {
      light: themeData.schemes.light,
      lightMediumContrast: themeData.schemes['light-medium-contrast'],
      lightHighContrast: themeData.schemes['light-high-contrast'],
      dark: themeData.schemes.dark,
      darkMediumContrast: themeData.schemes['dark-medium-contrast'],
      darkHighContrast: themeData.schemes['dark-high-contrast']
    }
  };

  return (
    <ThemeContext.Provider value={{ colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => React.useContext(ThemeContext);