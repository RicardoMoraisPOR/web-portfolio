import {
  CSSProperties,
  FC,
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react';
import styled from 'styled-components';

type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

type Intensity = IntRange<0, 100>;

interface GlowingCardCoordinatesProps {
  $x?: number;
  $y?: number;
  $intensity: Intensity;
}

interface GlowingCardProps {
  intensity: Intensity;
}

const GlowingCardComponent = styled('div').attrs<GlowingCardCoordinatesProps>(
  ({ $x, $y }) => ({
    style: {
      '--x': `${$x}px`,
      '--y': `${$y}px`,
    } as CSSProperties,
  })
)(({ theme, $intensity }) => {
  return {
    backgroundColor: theme.palette.secondary,
    borderRadius: 'inherit',
    height: '100%',
    position: 'relative',
    width: '100%',

    '&::after': {
      borderRadius: 'inherit',
      content: '""',
      height: '100%',
      left: '0px',
      opacity: 0,
      position: 'absolute',
      top: '0px',
      transition: 'opacity 800ms',
      width: '100%',
      background: `radial-gradient(400px circle at var(--x) var(--y), ${theme.palette.primary}, transparent ${$intensity}%)`,
      zIndex: 1,
    },

    '&:hover': {
      '&::after': {
        opacity: 1,
      },
    },
  };
});

const InnerContainer = styled('div')(({ theme }) => {
  return {
    backgroundColor: theme.palette.secondary,
    borderRadius: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    inset: '1px',
    position: 'absolute',
    zIndex: 2,
  };
});

const GlowingCard: FC<PropsWithChildren<GlowingCardProps>> = ({
  children,
  intensity,
}) => {
  const [mouseCoordinates, setMouseCoordinates] =
    useState<Omit<GlowingCardCoordinatesProps, '$intensity'>>();

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

  return (
    <GlowingCardComponent
      {...mouseCoordinates}
      $intensity={intensity}
      onMouseMove={handleMouseMove}
    >
      <InnerContainer>{children}</InnerContainer>
    </GlowingCardComponent>
  );
};

export default GlowingCard;
