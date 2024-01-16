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
import { darkTheme, lightTheme } from './Themes';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

export const ThemeTypeContext = createContext<ThemeContextProps>({
  isDarkTheme: window.matchMedia('(prefers-color-scheme: dark)').matches,
});

export const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia('(prefers-color-scheme: light)').matches
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

  return (
    <ThemeTypeContext.Provider value={contextValue}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeTypeContext.Provider>
  );
};

export default AppThemeProvider;
