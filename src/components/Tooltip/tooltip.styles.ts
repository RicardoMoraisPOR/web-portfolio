import * as RadixTooltip from '@radix-ui/react-tooltip';
import styled from 'styled-components';

export const Content = styled(RadixTooltip.Content)(({ theme }) => ({
  '@keyframes slideUpAndFade': {
    '0%': {
      opacity: 0,
      transform: 'translateY(5px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  maxWidth: '95vw',
  color: theme.palette.background,
  borderRadius: 4,
  padding: '10px',
  fontSize: '12px',
  lineHeight: 1,
  backgroundColor: theme.palette.primary,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',
  animationDuration: '800ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"][data-side="top"]': {
    animationName: 'slideUpAndFade',
  },
}));

export const Arrow = styled(RadixTooltip.Arrow)(({ theme }) => ({
  fill: theme.palette.primary,
}));

export const NoActionButton = styled.button({
  background: 'transparent',
  border: 'none',
  padding: 0,
  all: 'unset',
  display: 'flex',
  cursor: 'default',
  textAlign: 'center',
  color: 'inherit',
  font: 'inherit',
  outline: 'none',
  alignItems: 'stretch',
  '&:focus': {
    svg: {
      opacity: '100%',
    },
  },
});
