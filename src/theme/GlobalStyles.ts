import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle(({ theme }) => {
  return {
    '*, *::before, *::after': {
      transition: 'background-color 0.5s ease',
      boxSizing: 'inherit',
    },
    html: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      boxSizing: 'border-box',
      WebkitTextSizeAdjust: '100%',
    },

    h1: {
      fontSize: '4rem',
      fontFamily: theme.fonts.quicksand,
    },

    body: {
      transition: 'color 0.5s linear',
      margin: 0,
      color: theme.palette.text,
      backgroundColor: theme.palette.background,
      fontFamily: 'Montserrat Variable, sans-serif',
    },
  };
});

export default GlobalStyles;
