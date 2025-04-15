import { FC, PropsWithChildren, useRef } from 'react';
import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
  ScrollContentContainer,
} from './scrollableContent.styles';
import { ScrollableContentProps } from './scrollableContent.types';

const ScrollableContent: FC<PropsWithChildren<ScrollableContentProps>> = ({
  children,
  withFlexColumnContainer = true,
  parentHeight = '100%',
}) => {
  const scrollRef = useRef(null);
  return (
    <ScrollAreaRoot type="auto" ref={scrollRef}>
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
