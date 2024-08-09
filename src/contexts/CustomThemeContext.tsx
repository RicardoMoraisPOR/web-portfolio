import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { DefaultTheme } from 'styled-components/dist/types';

interface CustomThemeContextProps {
  setCustomTheme: (
    type: 'dark' | 'light',
    theme: DefaultTheme['palette']
  ) => void;
  customDarkTheme?: DefaultTheme['palette'];
  customLightTheme?: DefaultTheme['palette'];
}

const CustomThemeContext = createContext<CustomThemeContextProps | undefined>(
  undefined
);

export const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [customLightTheme, setCustomLightTheme] =
    useState<DefaultTheme['palette']>();
  const [customDarkTheme, setCustomDarkTheme] =
    useState<DefaultTheme['palette']>();

  useEffect(() => {
    const jsonLight = localStorage.getItem('custom-theme-light');
    const jsonDark = localStorage.getItem('custom-theme-dark');

    let customLight = undefined;
    let customDark = undefined;

    if (jsonLight) {
      customLight = JSON.parse(jsonLight) as DefaultTheme['palette'];
    }
    if (jsonDark) {
      customDark = JSON.parse(jsonDark) as DefaultTheme['palette'];
    }

    setCustomLightTheme(customLight);
    setCustomDarkTheme(customDark);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCustomTheme = useCallback(
    (type: 'dark' | 'light', theme: DefaultTheme['palette']) => {
      if (type === 'dark') {
        setCustomDarkTheme(theme);
        localStorage.setItem('custom-theme-dark', JSON.stringify(theme));
      }
      if (type === 'light') {
        setCustomLightTheme(theme);
        localStorage.setItem('custom-theme-light', JSON.stringify(theme));
      }
    },
    []
  );

  return (
    <CustomThemeContext.Provider
      value={{ setCustomTheme, customDarkTheme, customLightTheme }}
    >
      {children}
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeContext;
