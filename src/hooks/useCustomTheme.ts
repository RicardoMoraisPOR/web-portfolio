import CustomThemeContext from '@contexts/CustomThemeContext';
import { useContext } from 'react';

export const useCustomThemeContext = () => {
  const context = useContext(CustomThemeContext);
  if (!context) {
    throw new Error(
      'useCustomThemeContext must be used within a CustomThemeProvider'
    );
  }
  return context;
};
