import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';

type ThemeContextProps = {
  isDarkTheme: boolean;
  toggleTheme?: (darkTheme?: boolean) => void;
};

export const ThemeToggleContext = createContext<ThemeContextProps>({
  isDarkTheme: window.matchMedia('(prefers-color-scheme: dark)').matches,
});

export const AppTheme: FC<PropsWithChildren> = ({ children }) => {
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
    <ThemeToggleContext.Provider value={contextValue}>
      <ThemeProvider theme={{}}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default AppTheme;
