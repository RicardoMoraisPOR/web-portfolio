import { useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { createPortal } from 'react-dom';
import { useTheme } from 'styled-components';

const ConfettiEffect: React.FC = () => {
  const theme = useTheme();
  const confettiRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (confettiRef.current) {
      const createConfetti = confetti.create(confettiRef.current, {
        resize: true,
        useWorker: true,
      });

      const options: confetti.Options = {
        scalar: 1,
        particleCount: 30,
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
          // since they fall down, start a bit higher than random
          y: 0.1,
        },
      };

      createConfetti(options);
      createConfetti({
        ...options,
        origin: {
          x: Math.random() * 0.2 + 0.6,
          // since they fall down, start a bit higher than random
          y: Math.random() * 0.2 + 0.1,
        },
      });
      createConfetti({
        ...options,
        origin: {
          x: Math.random() * 0.2 + 0.2,
          // since they fall down, start a bit higher than random
          y: Math.random() * 0.2 + 0.3,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <canvas
      ref={confettiRef}
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />,
    document.getElementById('bg-id-portal') as HTMLElement
  );
};

export default ConfettiEffect;
