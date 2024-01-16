import { CSSObject } from 'styled-components';

export type ThemeContextProps = {
  isDarkTheme: boolean;
  toggleTheme?: (darkTheme?: boolean) => void;
};

export interface Palette {
  background: CSSObject['color'];
  primary: CSSObject['color'];
  secondary: CSSObject['color'];
  text: CSSObject['color'];
}
export interface Fonts {
  quicksand: CSSObject['fontFamily'];
  montserrat: CSSObject['fontFamily'];
}

export default interface Theme {
  fonts: Fonts;
  palette: Palette;
}
