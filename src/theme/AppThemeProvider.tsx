import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';
import Theme, { ThemeContextProps } from './AppTheme.types';
import {
  darkTheme as defaultDark,
  lightTheme as defaultLight,
} from './AppThemes';
import { useCustomThemeContext } from '../hooks/useCustomTheme';
import { DefaultTheme } from 'styled-components/dist/types';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

export const ThemeTypeContext = createContext<ThemeContextProps>({
  isDarkTheme: window.matchMedia('(prefers-color-scheme: dark)').matches,
});

export const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { customDarkTheme, customLightTheme } = useCustomThemeContext();
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const toggleTheme = useCallback<
    NonNullable<ThemeContextProps['toggleTheme']>
  >((darkTheme) => {
    setIsDarkTheme((previous) =>
      darkTheme === undefined ? !previous : darkTheme
    );
  }, []);

  const contextValue = useMemo<ThemeContextProps>(() => {
    return { isDarkTheme, toggleTheme };
  }, [isDarkTheme, toggleTheme]);

  const darkTheme = useMemo<DefaultTheme>(() => {
    return customDarkTheme
      ? {
          ...defaultDark,
          palette: customDarkTheme,
        }
      : defaultDark;
  }, [customDarkTheme]);

  const lightTheme = useMemo<DefaultTheme>(() => {
    return customLightTheme
      ? {
          ...defaultLight,
          palette: customLightTheme,
        }
      : defaultLight;
  }, [customLightTheme]);

  return (
    <ThemeTypeContext.Provider value={contextValue}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeTypeContext.Provider>
  );
};

export default AppThemeProvider;
