import { createGlobalStyle } from 'styled-components';
import { alphaHexConverter } from './AppThemeUtils';

const GlobalStyles = createGlobalStyle(({ theme }) => {
  return {
    '*, *::before, *::after': {
      transition: `background-color ${theme.transitions.fast}ms ease`,
      boxSizing: 'inherit',
    },

    '::-moz-selection': {
      color: theme.palette.secondary,
      background: theme.palette.primary,
    },

    '::selection': {
      color: theme.palette.secondary,
      background: theme.palette.primary,
    },

    html: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      boxSizing: 'border-box',
      WebkitTextSizeAdjust: '100%',
    },

    '&:focus-visible': {
      outline: `1px dashed ${alphaHexConverter(theme.palette.primary, 30)}`,
    },

    h1: {
      fontSize: 'clamp(2.2rem, 5vw, 3rem)',
      fontFamily: theme.fonts.lato,
      textAlign: 'center',
    },

    h2: {
      fontFamily: theme.fonts.lato,
      textAlign: 'center',
    },

    span: {
      lineHeight: 1.6,
      letterSpacing: '0.5px',
    },

    body: {
      transition: `color ${theme.transitions.fast}ms linear, background-color ${theme.transitions.fast}ms ease`,
      margin: 0,
      color: theme.palette.text,
      backgroundColor: theme.palette.background,
      fontFamily: theme.fonts.montserrat,
    },
  };
});

export default GlobalStyles;
