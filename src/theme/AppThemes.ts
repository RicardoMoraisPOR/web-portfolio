import { DefaultTheme } from 'styled-components';
import { Palette } from './AppTheme.types';
import type { Except } from 'type-fest';

const baseTheme: Except<DefaultTheme, 'palette'> = {
  breakpoints: {
    min: {
      mobile: '@media only screen and (min-width: 600px)',
      tablet: '@media only screen and (min-width: 960px)',
      desktop: '@media only screen and (min-width: 1280px)',
    },
    max: {
      mobile: '@media only screen and (max-width: 600px)',
      tablet: '@media only screen and (max-width: 960px)',
      desktop: '@media only screen and (max-width: 1280px)',
    },
  },
  fonts: {
    quicksand: 'Quicksand Variable, sans-serif;',
    montserrat: 'Montserrat Variable, sans-serif',
  },
  transitions: {
    fast: 300,
    normal: 800,
    slow: 1200,
  },
};

const defaultAccent: Palette['accent'] = '#63CAFD';

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  palette: {
    accent: defaultAccent,
    primary: '#9ADDF9',
    secondary: '#0D2530',
    background: '#071319',
    text: '#ECF9FE',
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  palette: {
    accent: defaultAccent,
    primary: '#04AAF1',
    secondary: '#B4E6FB',
    background: '#ECF9FE',
    text: '#071319',
  },
};
