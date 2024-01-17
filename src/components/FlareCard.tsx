import {
  CSSProperties,
  FC,
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react';
import styled, { CSSObject } from 'styled-components';
import { IntRange } from '../utils/typeUtils';

interface FlareCardCoordinatesProps {
  $x?: number;
  $y?: number;
  $intensity: IntRange<0, 101>;
  $borderRadius?: CSSObject['borderRadius'];
}

type FlareCardProps = Omit<FlareCardCoordinatesProps, '$x' | '$y'>;

const FlareCardComponent = styled('div').attrs<FlareCardCoordinatesProps>(
  ({ $x, $y }) => ({
    style: {
      '--x': `${$x}px`,
      '--y': `${$y}px`,
    } as CSSProperties,
  })
)(({ theme, $intensity, $borderRadius }) => {
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
    position: 'relative',
    display: 'flex',
    zIndex: 2,
  };
});

const FlareCard: FC<PropsWithChildren<FlareCardProps>> = ({
  children,
  ...props
}) => {
  const [mouseCoordinates, setMouseCoordinates] =
    useState<Pick<FlareCardCoordinatesProps, '$x' | '$y'>>();

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
    <FlareCardComponent
      {...mouseCoordinates}
      {...props}
      onMouseMove={handleMouseMove}
    >
      <InnerContainer>{children}</InnerContainer>
    </FlareCardComponent>
  );
};

export default FlareCard;
