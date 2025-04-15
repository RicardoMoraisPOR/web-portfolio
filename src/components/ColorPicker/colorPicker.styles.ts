import * as Popover from '@radix-ui/react-popover';
import { isColorLight } from '@theme/themeUtils';
import { HexColorPicker } from 'react-colorful';
import styled from 'styled-components';

export const Button = styled.button<{ $color: string }>(({ theme, $color }) => {
  let isLight = !isColorLight($color);

  if (theme.isDarkTheme) {
    isLight = isColorLight($color);
  }

  return {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '10px',
    fontWeight: 'normal',
    padding: '8px 16px',
    background: 'transparent',
    border: `1px solid ${theme.palette.text}`,
    backgroundColor: isLight ? theme.palette.background : theme.palette.text,
    color: isLight ? theme.palette.text : theme.palette.background,
    borderRadius: '4px',
    cursor: 'pointer',
  };
});

export const PopoverContent = styled(Popover.Content)<{ $color: string }>(
  ({ $color, theme }) => ({
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
    backgroundColor: isColorLight($color) ? 'black' : 'white',
    color: isColorLight($color) ? 'white' : 'black',
    borderRadius: '10px',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
    animationDuration: `${theme.transitions.fast}ms`,
    animationTimingFunction: 'ease',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="bottom"]': { animationName: 'slideUpAndFade' },
    },
  })
);

export const ColorBlock = styled.div<{ color: string }>(({ color }) => ({
  height: '24px',
  width: '24px',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: color,
  '&:active': {
    transform: 'scale(1.05)',
  },
}));

export const StyledHexColorPicker = styled(HexColorPicker)<{
  $hasChanged: boolean;
}>(({ $hasChanged, theme }) => ({
  '& .react-colorful__last-control': {
    transition: `border-radius ${theme.transitions.normal}ms ease`,
    borderRadius: $hasChanged ? '0px' : '0px 0px 8px 9px',
  },
}));

export const ColorTitleWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '2px',
});

export const ColorTitle = styled.span({
  fontSize: '14px',
  lineHeight: 1,
  fontWeight: '600',
});

export const ColorHex = styled.span({
  fontSize: '10px',
  lineHeight: 1,
  opacity: 0.6,
});

export const PickerWrapper = styled.div({ display: 'flex', gap: '10px' });
