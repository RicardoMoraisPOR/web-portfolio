import { DefaultTheme } from 'styled-components';
import { Palette } from './AppTheme.types';
import type { Except } from 'type-fest';

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

const defaultAccent: Palette['accent'] = '#9ca3af'; // slate-500

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  isDarkTheme: true,
  palette: {
    accent: defaultAccent,
    primary: '#d4d4d8', // zinc-400
    secondary: '#3f3f46', // zinc-800
    background: '#18181b', // zinc-900
    text: '#fafafa', // zinc-100
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  isDarkTheme: false,
  palette: {
    accent: defaultAccent,
    primary: '#334155', // slate-700
    secondary: '#cbd5e1', // slate-300
    background: '#f8fafc', // slate-50
    text: '#0f172a', // slate-900
  },
};
