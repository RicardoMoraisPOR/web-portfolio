import { useRef } from 'react';
import { IntroTextAbout, IntroTextWrapper } from '../pages/HomePage';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

type RevealingSectionProps = {
  title?: string;
  description?: JSX.Element;
  inView?: boolean;
};

const RevealingSection = ({
  title,
  description,
  inView,
}: RevealingSectionProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(textRef.current, { opacity: 0, y: 30 });
  }, []);

  useGSAP(() => {
    if (inView) {
      gsap.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      });
    }
  }, [inView]);

  return (
    <div ref={textRef}>
      <h2>{title}</h2>
      <IntroTextWrapper>
        <IntroTextAbout>{description}</IntroTextAbout>
      </IntroTextWrapper>
    </div>
  );
};

export default RevealingSection;
