import { useContext } from 'react';
import { ThemeToggleContext } from '../theme/AppTheme';

export const useAppTheme = () => useContext(ThemeToggleContext);
