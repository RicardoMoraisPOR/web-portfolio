import { SCROLLBAR_SIZE } from '@constants/sizes';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import styled, { CSSObject } from 'styled-components';

export const ScrollContentContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '1rem',
});

export const ScrollAreaRoot = styled(ScrollArea.Root)({
  width: 'inherit',
  height: 'inherit',
  overflow: 'hidden',
});

export const ScrollAreaViewport = styled(ScrollArea.Viewport)<{
  $height: CSSObject['height'];
}>(({ $height }) => {
  return {
    width: '100%',
    height: '100%',

    '& > div': {
      height: $height,
    },
  };
});

export const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar)(({ theme }) => {
  return {
    display: 'flex',
    userSelect: 'none',
    touchAction: 'none',
    borderRadius: SCROLLBAR_SIZE,
    background: theme.palette.secondary,
    transitionProperty: 'background',
    transitionDuration: `${theme.transitions.fast}`,
    transitionTimingFunction: 'linear',
    '&:hover': { background: theme.palette.secondary },
    '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  };
});

export const ScrollAreaThumb = styled(ScrollArea.Thumb)(({ theme }) => {
  return {
    flex: 1,
    background: theme.palette.primary,
    borderRadius: SCROLLBAR_SIZE,
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%',
      minWidth: '44px',
      minHeight: '44px',
    },
  };
});

export const ScrollAreaCorner = styled(ScrollArea.Corner)({
  background: 'black',
});
