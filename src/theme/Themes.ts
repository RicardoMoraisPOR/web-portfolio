import { DefaultTheme } from 'styled-components';

const baseThemeFonts: DefaultTheme['fonts'] = {
  quicksand: 'Quicksand Variable, sans-serif;',
  montserrat: 'Montserrat Variable, sans-serif',
};

export const darkTheme: DefaultTheme = {
  fonts: baseThemeFonts,
  palette: {
    primary: '#4AC7FA',
    secondary: '#0D2530',
    background: '#071319',
    text: '#ECF9FE',
  },
};

export const lightTheme: DefaultTheme = {
  fonts: baseThemeFonts,
  palette: {
    primary: '#4AC7FA',
    secondary: '#cceffd',
    background: '#ECF9FE',
    text: '#071319',
  },
};
