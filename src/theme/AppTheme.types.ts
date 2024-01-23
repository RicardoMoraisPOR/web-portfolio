import { CSSObject } from 'styled-components';

export type ThemeContextProps = {
  isDarkTheme: boolean;
  toggleTheme?: (darkTheme?: boolean) => void;
};

type ThemeColor = NonNullable<CSSObject['color']>;
type ThemeFont = NonNullable<CSSObject['fontFamily']>;

export type Palette = {
  background: ThemeColor;
  primary: ThemeColor;
  accent: ThemeColor;
  secondary: ThemeColor;
  text: ThemeColor;
};
export type Fonts = {
  quicksand: ThemeFont;
  montserrat: ThemeFont;
};
export type Transitions = {
  fast: number;
  normal: number;
  slow: number;
};

export type Breakpoints = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type BreakpointTypes = {
  max: Breakpoints;
  min: Breakpoints;
};

export default interface Theme {
  breakpoints: BreakpointTypes;
  transitions: Transitions;
  fonts: Fonts;
  palette: Palette;
}
