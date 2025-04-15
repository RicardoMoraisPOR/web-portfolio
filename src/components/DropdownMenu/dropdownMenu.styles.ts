import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';

export const DropdownMenuContent = styled(DropdownMenu.Content)(
  ({ theme }) => ({
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
    color: theme.palette.background,
    borderRadius: 4,
    padding: '5px',
    lineHeight: 1,
    backgroundColor: theme.palette.primary,
    boxShadow:
      'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    userSelect: 'none',
    animationDuration: `${theme.transitions.fast}ms`,
    animationTimingFunction: 'ease',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"][data-side="bottom"]': {
      animationName: 'slideUpAndFade',
    },
  })
);

export const DropdownMenuItem = styled(DropdownMenu.Item)(({ theme }) => ({
  all: 'unset',
  cursor: 'pointer',
  lineHeight: '1',
  color: theme.palette.background,
  borderRadius: '3px',
  display: 'flex',
  alignItems: 'center',
  height: '25px',
  padding: '2px 20px 2px 10px',
  position: 'relative',
  userSelect: 'none',
  fontSize: '0.8rem',
  '&[data-highlighted]': {
    backgroundColor: theme.palette.secondary,
    color: theme.palette.text,
  },
}));

export const DropdownMenuArrow = styled(DropdownMenu.Arrow)(({ theme }) => ({
  fill: theme.palette.primary,
}));

export const NoActionButton = styled.button({
  background: 'transparent',
  border: 'none',
  padding: 0,
  all: 'unset',
  display: 'flex',
  cursor: 'pointer',
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
