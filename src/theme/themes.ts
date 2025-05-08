import { DefaultTheme } from 'styled-components';
import type { Except } from 'type-fest';
import { Palette } from './theme.types';

const baseTheme: Except<DefaultTheme, 'palette' | 'isDarkTheme'> = {
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
    lato: 'Lato, sans-serif;',
    montserrat: 'Montserrat, sans-serif',
  },
  transitions: {
    fast: 300,
    normal: 800,
    slow: 1200,
  },
};

const defaultAccent: Palette['accent'] = '#a1a1aa'; // slate-500

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  isDarkTheme: true,
  palette: {
    accent: defaultAccent,
    primary: '#e4e4e7',
    secondary: '#27272a',
    background: '#09090b',
    text: '#fafafa',
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  isDarkTheme: false,
  palette: {
    accent: defaultAccent,
    primary: '#3f3f46',
    secondary: '#d4d4d8',
    background: '#fafafa',
    text: '#09090b',
  },
};
