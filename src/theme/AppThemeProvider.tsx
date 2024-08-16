import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
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

  useEffect(() => {
    const updateFavicon = () => {
      const isDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      const favicon = document.getElementById('favicon') as HTMLLinkElement;
      if (favicon) {
        favicon.href = isDarkMode
          ? '/logo-dark-theme.svg'
          : '/logo-light-theme.svg';
      }
    };

    updateFavicon();

    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    darkModeMediaQuery.addEventListener('change', updateFavicon);

    // Cleanup listener on component unmount
    return () => {
      darkModeMediaQuery.removeEventListener('change', updateFavicon);
    };
  }, []);

  return (
    <ThemeTypeContext.Provider value={contextValue}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeTypeContext.Provider>
  );
};

export default AppThemeProvider;
