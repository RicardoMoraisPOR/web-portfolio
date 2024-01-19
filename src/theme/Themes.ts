import { DefaultTheme } from 'styled-components';

const baseThemeFonts: DefaultTheme['fonts'] = {
  quicksand: 'Quicksand Variable, sans-serif;',
  montserrat: 'Montserrat Variable, sans-serif',
};

const baseTheme: Pick<DefaultTheme['palette'], 'accent'> = {
  accent: '#63CAFD',
};

export const darkTheme: DefaultTheme = {
  fonts: baseThemeFonts,
  palette: {
    ...baseTheme,
    primary: '#9ADDF9',
    secondary: '#0D2530',
    background: '#071319',
    text: '#ECF9FE',
  },
};

export const lightTheme: DefaultTheme = {
  fonts: baseThemeFonts,
  palette: {
    ...baseTheme,
    primary: '#04AAF1',
    secondary: '#CCEEFC',
    background: '#ECF9FE',
    text: '#071319',
  },
};
