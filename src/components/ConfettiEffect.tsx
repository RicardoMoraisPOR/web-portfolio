import { useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';

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
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, []);

  return (
    <canvas
      ref={confettiRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default ConfettiEffect;
