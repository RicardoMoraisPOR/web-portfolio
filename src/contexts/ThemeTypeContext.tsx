import { ThemeContextProps } from '@theme/appTheme.types';
import { createContext } from 'react';

const ThemeTypeContext = createContext<ThemeContextProps>({
  isDarkTheme: window.matchMedia('(prefers-color-scheme: dark)').matches,
});

export default ThemeTypeContext;
