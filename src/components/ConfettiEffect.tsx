import { useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { createPortal } from 'react-dom';

const ConfettiEffect: React.FC = () => {
  const confettiRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (confettiRef.current) {
      const myConfetti = confetti.create(confettiRef.current, {
        resize: true,
        useWorker: true,
      });
      myConfetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
        gravity: 4, // Increase gravity to make confetti fall faster
        ticks: 100, // Reduce ticks to shorten confetti lifespan
      });
    }
  }, []);

  return createPortal(
    <canvas
      ref={confettiRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    />,
    document.body
  );
};

export default ConfettiEffect;
