import { useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { createPortal } from 'react-dom';
import styled, { useTheme } from 'styled-components';

const StyledCanvas = styled.canvas({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
});

const ConfettiEffect: React.FC = () => {
  const theme = useTheme();
  const confettiRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (confettiRef.current) {
      const createConfetti = confetti.create(confettiRef.current, {
        resize: true,
      });

      const options: confetti.Options = {
        scalar: 1,
        particleCount: 20,
        startVelocity: 35,
        spread: 360,
        colors: [
          theme.palette.primary,
          theme.palette.secondary,
          theme.palette.accent,
        ],
        shapes: ['circle', 'square', 'star'],
        drift: 0.2,
        gravity: 3,
        origin: {
          x: 0.5,
          y: 0.1,
        },
      };

      setTimeout(() => {
        createConfetti(options);
      }, Math.floor(Math.random() * (200 - 0 + 1)));
      setTimeout(() => {
        createConfetti({
          ...options,
          origin: {
            x: Math.random() * 0.2 + 0.6,
            y: Math.random() * 0.2 + 0.1,
          },
        });
      }, Math.floor(Math.random() * (200 - 0 + 1)));
      setTimeout(() => {
        createConfetti({
          ...options,
          origin: {
            x: Math.random() * 0.2 + 0.2,
            y: Math.random() * 0.2 + 0.3,
          },
        });
      }, Math.floor(Math.random() * (200 - 0 + 1)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <StyledCanvas ref={confettiRef} />,
    document.getElementById('bg-id-portal') as HTMLElement
  );
};

export default ConfettiEffect;
