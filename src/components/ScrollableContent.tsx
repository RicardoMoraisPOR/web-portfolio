import { FC, PropsWithChildren } from 'react';
import styled, { CSSObject } from 'styled-components';
import * as ScrollArea from '@radix-ui/react-scroll-area';

type ScrollableContentProps = {
  /**
   * the parent container height
   * @default "100%"
   */
  parentHeight?: CSSObject['height'];

  /**
   * if the children should be rendered inside a flex column container
   * @default true
   */
  withFlexColumnContainer?: boolean;
};

const SCROLLBAR_SIZE = 6;

export const ScrollContentContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
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
    scrollBehavior: 'smooth',
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
    transition: `background ${theme.transitions.fast}ms ease`,
    '&:hover': { cursor: 'pointer' },
    '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  };
});

export const ScrollAreaThumb = styled(ScrollArea.Thumb)(({ theme }) => {
  return {
    flex: 1,
    background: theme.palette.primary,
    transition: `background ${theme.transitions.fast}ms ease`,
    borderRadius: SCROLLBAR_SIZE,
    position: 'relative',
    '&:hover': { cursor: 'n-resize' },

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

const ScrollableContent: FC<PropsWithChildren<ScrollableContentProps>> = ({
  children,
  withFlexColumnContainer = true,
  parentHeight = '100%',
}) => {
  return (
    <ScrollAreaRoot>
      <ScrollAreaViewport $height={parentHeight}>
        {withFlexColumnContainer ? (
          <ScrollContentContainer>{children}</ScrollContentContainer>
        ) : (
          children
        )}
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  );
};

export default ScrollableContent;
