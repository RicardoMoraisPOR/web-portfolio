import { useContext } from 'react';
import { ThemeToggleContext } from '../theme/AppThemeContext';

export const useAppTheme = () => useContext(ThemeToggleContext);
