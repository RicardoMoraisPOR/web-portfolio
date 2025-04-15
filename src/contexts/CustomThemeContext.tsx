import { CUSTOM_THEME_STORAGE_KEY } from '@constants/localstorage';
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
  setCustomTheme: (theme: DefaultTheme['palette']) => void;
  deleteCustomTheme: () => void;
  customTheme?: DefaultTheme['palette'];
}

const CustomThemeContext = createContext<CustomThemeContextProps | undefined>(
  undefined
);

export const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [customThemeState, setCustomThemeState] =
    useState<DefaultTheme['palette']>();

  useEffect(() => {
    const jsonCustomTheme = localStorage.getItem(CUSTOM_THEME_STORAGE_KEY);

    let customThemeFromStorage = undefined;

    if (jsonCustomTheme) {
      customThemeFromStorage = JSON.parse(
        jsonCustomTheme
      ) as DefaultTheme['palette'];
    }

    setCustomThemeState(customThemeFromStorage);
  }, []);

  const setCustomTheme = useCallback((theme: DefaultTheme['palette']) => {
    setCustomThemeState(theme);
    localStorage.setItem(CUSTOM_THEME_STORAGE_KEY, JSON.stringify(theme));
  }, []);

  const deleteCustomTheme = useCallback(() => {
    setCustomThemeState(undefined);
    localStorage.removeItem(CUSTOM_THEME_STORAGE_KEY);
  }, []);

  return (
    <CustomThemeContext.Provider
      value={{
        setCustomTheme,
        deleteCustomTheme,
        customTheme: customThemeState,
      }}
    >
      {children}
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeContext;
