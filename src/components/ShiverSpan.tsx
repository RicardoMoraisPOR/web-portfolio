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
        duration: 0.3,
      })
        .to(spanRef.current, {
          x: 1,
          y: -2,
          rotate: -45,
          scale: 0.95,
          duration: 0.2,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: -1,
          y: 2,
          rotate: -45,
          scale: 0.95,
          duration: 0.2,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: 2,
          y: -1,
          rotate: -47,
          scale: 0.96,
          duration: 0.1,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: -2,
          y: 1,
          rotate: -43,
          scale: 0.96,
          duration: 0.1,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: 1,
          y: -1,
          rotate: -45,
          scale: 0.97,
          duration: 0.1,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: -1,
          y: 1,
          rotate: -43,
          scale: 0.97,
          duration: 0.1,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: 1,
          y: 0,
          rotate: -32,
          scale: 0.98,
          duration: 0.1,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: -1,
          y: 0,
          rotate: -21,
          scale: 0.98,
          duration: 0.1,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: 0,
          y: 0,
          rotate: -11,
          scale: 1,
          duration: 0.2,
          ease: 'power1.inOut',
        });

      spanRef.current.addEventListener('click', () => {
        setClicked((value) => (value === 'notFound' ? 'found' : value));
        setTimeout(() => {
          setClicked('disabled');
        }, 1500);
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
      {clicked === 'disabled' ? (
        <span>{children}</span>
      ) : (
        <span
          ref={spanRef}
          style={{
            display: 'inline-block',
            cursor: clicked === 'notFound' ? 'pointer' : 'default',
          }}
        >
          {children}
        </span>
      )}
    </>
  );
};

export default ShiverSpan;
