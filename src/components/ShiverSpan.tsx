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
        duration: 0,
      })
        .to(spanRef.current, {
          x: 1,
          y: -2,
          rotate: -11,
          duration: 0.3,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: -1,
          y: 2,
          rotate: -23,
          duration: 0.3,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: 2,
          y: -1,
          rotate: -35,
          duration: 0.2,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: -2,
          y: 1,
          rotate: -43,
          duration: 0.2,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: 1,
          y: -1,
          rotate: -45,
          duration: 0.2,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: -1,
          y: 1,
          rotate: -34,
          duration: 0.2,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: 1,
          y: 0,
          rotate: -26,
          duration: 0.2,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: -1,
          y: 0,
          rotate: -16,
          duration: 0.2,
          ease: 'power1.inOut',
        })
        .to(spanRef.current, {
          x: 0,
          y: 0,
          rotate: -8,
          duration: 0.3,
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
