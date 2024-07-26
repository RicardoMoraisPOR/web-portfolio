import { useRef, useEffect, PropsWithChildren, FC, useState } from 'react';
import { gsap } from 'gsap';
import ConfettiEffect from './ConfettiEffect';

const ShiverSpan: FC<PropsWithChildren> = ({ children }) => {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const [clicked, setClicked] = useState<'notFound' | 'found' | 'disabled'>(
    'notFound'
  );

  useEffect(() => {
    if (spanRef.current) {
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.01,
        delay: 5,
      });

      tl.from(spanRef.current, {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        duration: 0.5,
      })
        .to(spanRef.current, {
          x: 5,
          y: -2,
          rotate: -5,
          scale: 0.95,
          duration: 0.2,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: -5,
          y: 2,
          rotate: 5,
          scale: 0.95,
          duration: 0.2,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: 4,
          y: -1,
          rotate: -4,
          scale: 0.96,
          duration: 0.1,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: -4,
          y: 1,
          rotate: 4,
          scale: 0.96,
          duration: 0.1,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: 3,
          y: -1,
          rotate: -3,
          scale: 0.97,
          duration: 0.1,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: -3,
          y: 1,
          rotate: 3,
          scale: 0.97,
          duration: 0.1,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: 2,
          y: 0,
          rotate: -2,
          scale: 0.98,
          duration: 0.1,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: -2,
          y: 0,
          rotate: 2,
          scale: 0.98,
          duration: 0.1,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          duration: 0.5,
          ease: 'power1.inOut',
        });

      spanRef.current.addEventListener('click', () => {
        setClicked('found');
        setTimeout(() => {
          setClicked('disabled');
        }, 5000);
        tl.pause();
        gsap.to(spanRef.current, {
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          duration: 0.2,
          ease: 'power1.inOut',
        });
      });

      return () => {
        tl.kill();
      };
    }
  }, []);

  return (
    <>
      {clicked === 'found' && <ConfettiEffect />}
      <span
        ref={spanRef}
        style={{
          display: 'inline-block',
          cursor: clicked === 'notFound' ? 'pointer' : 'default',
        }}
      >
        {children}
      </span>
    </>
  );
};

export default ShiverSpan;
