import { useContext } from 'react';
import CustomThemeContext from '../contexts/CustomThemeContext';

export const useCustomThemeContext = () => {
  const context = useContext(CustomThemeContext);
  if (!context) {
    throw new Error(
      'useCustomThemeContext must be used within a CustomThemeProvider'
    );
  }
  return context;
};
