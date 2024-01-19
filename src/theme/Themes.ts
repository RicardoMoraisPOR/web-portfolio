import { DefaultTheme } from 'styled-components';

const baseThemeFonts: DefaultTheme['fonts'] = {
  quicksand: 'Quicksand Variable, sans-serif;',
  montserrat: 'Montserrat Variable, sans-serif',
};

const baseTheme: Pick<DefaultTheme['palette'], 'primary' | 'accent'> = {
  primary: '#04AAF1',
  accent: '#63CAFD',
};

export const darkTheme: DefaultTheme = {
  fonts: baseThemeFonts,
  palette: {
    ...baseTheme,
    secondary: '#0D2530',
    background: '#071319',
    text: '#ECF9FE',
  },
};

export const lightTheme: DefaultTheme = {
  fonts: baseThemeFonts,
  palette: {
    ...baseTheme,
    secondary: '#cceffd',
    background: '#ECF9FE',
    text: '#071319',
  },
};
