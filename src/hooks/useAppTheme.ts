import { useContext } from 'react';
import { ThemeTypeContext } from '../theme/AppThemeProvider';

export const useAppTheme = () => useContext(ThemeTypeContext);
