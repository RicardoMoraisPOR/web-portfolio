import { createGlobalStyle } from 'styled-components';
import { alphaHexConverter } from '../utils/themeUtils';

const GlobalStyles = createGlobalStyle(({ theme }) => {
  return {
    '*, *::before, *::after': {
      transition: 'background-color 0.3s ease',
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
      fontSize: '4rem',
      fontFamily: theme.fonts.quicksand,
    },

    body: {
      transition: 'color 0.3s linear, background-color 0.3s ease',
      margin: 0,
      color: theme.palette.text,
      backgroundColor: theme.palette.background,
      fontFamily: theme.fonts.montserrat,
    },
  };
});

export default GlobalStyles;
