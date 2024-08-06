import {
  useRef,
  useEffect,
  PropsWithChildren,
  FC,
  useState,
  useCallback,
} from 'react';
import { gsap } from 'gsap';
import { useToast } from '../hooks/useToast';
import { useNavigate } from 'react-router-dom';

const ShiverSpan: FC<PropsWithChildren> = ({ children }) => {
  const toast = useToast();
  const navigate = useNavigate();
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [clicked, setClicked] = useState<'notFound' | 'found' | 'disabled'>(
    'notFound'
  );

  useEffect(() => {
    if (spanRef.current) {
      timelineRef.current = gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.01,
        delay: 5,
      });

      timelineRef.current
        .from(spanRef.current, {
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

      return () => {
        timelineRef.current?.kill();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSpanClick = useCallback(() => {
    toast({
      title: '🚀 To the moon!',
      message: 'You have found a secret! check your progress!',
      actionText: 'View',
      action: () => navigate('/secrets'),
    });
    setClicked((value) => (value === 'notFound' ? 'found' : value));
    setTimeout(() => {
      setClicked('disabled');
    }, 3000);
    timelineRef.current?.pause();
    gsap.to(spanRef.current, {
      x: 0,
      y: 0,
      rotate: 0,
      duration: 0.2,
      ease: 'power1.inOut',
    });
  }, [navigate, toast]);

  return (
    <>
      {clicked === 'disabled' ? (
        <span>{children}</span>
      ) : (
        <span
          ref={spanRef}
          onClick={clicked === 'notFound' ? onSpanClick : undefined}
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
