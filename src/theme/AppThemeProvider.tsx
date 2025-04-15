import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';
import { PREFERRED_THEME_STORAGE_KEY } from '@constants/localstorage';
import ThemeTypeContext from '@contexts/ThemeTypeContext';
import { useCustomThemeContext } from '@hooks/useCustomTheme';
import Theme, { ThemeContextProps } from './theme.types';
import { darkTheme as defaultDark, lightTheme as defaultLight } from './themes';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { customTheme } = useCustomThemeContext();

  const getInitialThemePreference = () => {
    const storedTheme = localStorage.getItem(PREFERRED_THEME_STORAGE_KEY);
    if (storedTheme) {
      return storedTheme === 'dark';
    }

    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    localStorage.setItem(
      PREFERRED_THEME_STORAGE_KEY,
      systemPrefersDark ? 'dark' : 'light'
    );
    return systemPrefersDark;
  };

  const [isDarkTheme, setIsDarkTheme] = useState(getInitialThemePreference);

  const toggleTheme = useCallback<
    NonNullable<ThemeContextProps['toggleTheme']>
  >((darkTheme) => {
    setIsDarkTheme((previous) => {
      const newValue = darkTheme === undefined ? !previous : darkTheme;
      localStorage.setItem(
        PREFERRED_THEME_STORAGE_KEY,
        newValue ? 'dark' : 'light'
      );
      return newValue;
    });
  }, []);

  const contextValue = useMemo<ThemeContextProps>(() => {
    return { isDarkTheme, toggleTheme };
  }, [isDarkTheme, toggleTheme]);

  const customThemeProfile = useMemo<DefaultTheme | null>(() => {
    if (customTheme) {
      return {
        ...defaultLight,
        palette: customTheme,
      };
    }

    return null;
  }, [customTheme]);

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

  const themeProfile = isDarkTheme ? defaultDark : defaultLight;

  return (
    <ThemeTypeContext.Provider value={contextValue}>
      <ThemeProvider theme={customThemeProfile || themeProfile}>
        {children}
      </ThemeProvider>
    </ThemeTypeContext.Provider>
  );
};

export default AppThemeProvider;
