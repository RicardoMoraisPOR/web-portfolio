import {
  CSSProperties,
  FC,
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled, { CSSObject } from 'styled-components';
import { IntRange } from 'type-fest';
import useTouching from '../hooks/useIsTouching';

interface FlareCardCoordinatesProps {
  $x?: number;
  $y?: number;
  $intensity: IntRange<0, 101>;
  $borderRadius?: CSSObject['borderRadius'];
  $isTouching?: boolean;
}

type FlareCardProps = Omit<
  FlareCardCoordinatesProps,
  '$x' | '$y' | '$isTouching'
>;

const FlareCardComponent = styled('div').attrs<FlareCardCoordinatesProps>(
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

const InnerContainer = styled('div')(({ theme }) => {
  return {
    backgroundColor: theme.palette.secondary,
    borderRadius: 'inherit',
    position: 'relative',
    display: 'flex',
    zIndex: 2,
  };
});

const FlareCard: FC<PropsWithChildren<FlareCardProps>> = ({
  children,
  ...props
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [mouseCoordinates, setMouseCoordinates] =
    useState<Pick<FlareCardCoordinatesProps, '$x' | '$y'>>();
  const { isTouching, handleTouch } = useTouching();

  const handleMouseMove = useCallback<MouseEventHandler<HTMLDivElement>>(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();

      setMouseCoordinates({
        $x: e.clientX - rect.left,
        $y: e.clientY - rect.top,
      });
    },
    []
  );

  const handleTouchMove = useCallback((e: TouchEvent) => {
    // Prevent the window from scrolling
    e.preventDefault();

    const touch = e?.touches?.[0]; // Get the first touch point
    const rect = elementRef?.current?.getBoundingClientRect();

    setMouseCoordinates({
      $x: touch.clientX - (rect?.left ?? 0),
      $y: touch.clientY - (rect?.top ?? 0),
    });
  }, []);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      // remove passive
      element.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });

      return () => {
        element.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [handleTouchMove]);

  return (
    <FlareCardComponent
      ref={elementRef}
      {...mouseCoordinates}
      {...props}
      $isTouching={isTouching}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouch(true)}
      onTouchEnd={handleTouch(false)}
      onTouchCancel={handleTouch(false)}
    >
      <InnerContainer>{children}</InnerContainer>
    </FlareCardComponent>
  );
};

export default FlareCard;
