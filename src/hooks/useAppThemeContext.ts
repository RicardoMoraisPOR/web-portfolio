import { useContext } from 'react';
import { ThemeTypeContext } from '../theme/AppThemeProvider';

const useAppThemeContext = () => useContext(ThemeTypeContext);
export default useAppThemeContext;
