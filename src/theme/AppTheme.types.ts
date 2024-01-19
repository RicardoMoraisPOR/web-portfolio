import { CSSObject } from 'styled-components';

export type ThemeContextProps = {
  isDarkTheme: boolean;
  toggleTheme?: (darkTheme?: boolean) => void;
};

type ThemeColor = NonNullable<CSSObject['color']>;

export interface Palette {
  background: ThemeColor;
  primary: ThemeColor;
  accent: ThemeColor;
  secondary: ThemeColor;
  text: ThemeColor;
}
export interface Fonts {
  quicksand: CSSObject['fontFamily'];
  montserrat: CSSObject['fontFamily'];
}

export default interface Theme {
  fonts: Fonts;
  palette: Palette;
}
