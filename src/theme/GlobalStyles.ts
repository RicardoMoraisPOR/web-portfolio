import { createGlobalStyle } from 'styled-components';
import { alphaHexConverter } from './themeUtils';

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
      outlineOffset: '2px',
    },

    h1: {
      marginTop: '0px',
      fontSize: 'clamp(2.2rem, 3vw, 4rem)',
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
      fontSize: 'clamp(1rem, 1vw, 1.6rem)',
      transition: `color ${theme.transitions.fast}ms linear`,
    },

    a: {
      lineHeight: 1.6,
      letterSpacing: '0.5px',
      color: theme.palette.text,
      width: 'fit-content',
      transition: `color ${theme.transitions.fast}ms linear`,
      textDecoration: 'underline',
      textDecorationColor: theme.palette.text,
      textDecorationThickness: '1px',
      textUnderlineOffset: '4px',
      '&:hover': {
        color: theme.palette.primary,
        textDecorationColor: theme.palette.primary,
      },
    },

    svg: {
      transition: `fill ${theme.transitions.fast}ms ease`,
    },
    path: {
      transition: `fill ${theme.transitions.fast}ms ease`,
    },
    rect: {
      transition: `fill ${theme.transitions.fast}ms ease`,
    },

    body: {
      transition: `color ${theme.transitions.fast}ms linear, background-color ${theme.transitions.fast}ms ease, background ${theme.transitions.fast}ms ease`,
      margin: 0,
      color: theme.palette.text,
      backgroundColor: theme.palette.background,
      fontFamily: theme.fonts.montserrat,
    },
  };
});

export default GlobalStyles;
