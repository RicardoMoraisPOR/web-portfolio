import { CSSProperties } from 'react';
import styled from 'styled-components';
import { FlareCardCoordinatesProps } from './flareCard.types';

export const FlareCardComponent = styled.div.attrs<FlareCardCoordinatesProps>(
  ({ $x, $y }) => ({
    style: {
      '--x': `${$x}px`,
      '--y': `${$y}px`,
    } as CSSProperties,
  })
)(({ theme, $intensity, $borderRadius, $isTouching }) => {
  return {
    backgroundColor: theme.palette.secondary,
    borderRadius: $borderRadius ?? 'inherit',
    height: 'fit-content',
    position: 'relative',
    width: 'fit-content',
    padding: '1px',

    '&::after': {
      borderRadius: 'inherit',
      content: '""',
      height: '100%',
      left: '0px',
      opacity: $isTouching ? 1 : 0,
      position: 'absolute',
      top: '0px',
      transition: `opacity ${theme.transitions.slow}ms`,
      width: '100%',
      background: `radial-gradient(400px circle at var(--x) var(--y), ${theme.palette.primary}, transparent ${$intensity}%)`,
      zIndex: 1,
    },

    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': {
        '&::after': {
          opacity: 1,
        },
      },
    },
  };
});

export const InnerContainer = styled.div(({ theme }) => {
  return {
    backgroundColor: theme.palette.secondary,
    borderRadius: 'inherit',
    position: 'relative',
    display: 'flex',
    zIndex: 2,
  };
});
