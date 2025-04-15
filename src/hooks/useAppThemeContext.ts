import ThemeTypeContext from '@contexts/ThemeTypeContext';
import { useContext } from 'react';

const useAppThemeContext = () => useContext(ThemeTypeContext);
export default useAppThemeContext;
