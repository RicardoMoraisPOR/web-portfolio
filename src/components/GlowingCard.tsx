import {
  CSSProperties,
  FC,
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react';
import styled from 'styled-components';

interface GlowingCardProps {
  $x?: number;
  $y?: number;
}

const GlowingCardComponent = styled('div').attrs<GlowingCardProps>(
  ({ $x, $y }) => ({
    style: {
      '--x': `${$x}px`,
      '--y': `${$y}px`,
    } as CSSProperties,
  })
)({
  backgroundColor: '#0d2530',
  borderRadius: 'inherit',
  cursor: 'pointer',
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
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
    transition: 'opacity 250ms',
    width: '100%',
    background: `radial-gradient(400px circle at var(--x) var(--y), #4AC7FA80, transparent 40%)`,
    zIndex: 1,
  },

  '&:hover': {
    '&::after': {
      opacity: 1,
    },
  },
});

const InnerContainer = styled('div')({
  backgroundColor: '#0d2530',
  borderRadius: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  inset: '1px',
  padding: '10px',
  position: 'absolute',
  zIndex: 2,
});

const GlowingCard: FC<PropsWithChildren> = ({ children }) => {
  const [mouseCoordinates, setMouseCoordinates] = useState<GlowingCardProps>();

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
    <GlowingCardComponent {...mouseCoordinates} onMouseMove={handleMouseMove}>
      <InnerContainer>{children}</InnerContainer>
    </GlowingCardComponent>
  );
};

export default GlowingCard;
