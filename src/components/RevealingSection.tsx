import { useRef } from 'react';
import { IntroTextAbout, IntroTextWrapper } from '../pages/HomePage';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

type RevealingSectionProps = {
  title?: string;
  description?: JSX.Element;
};

const RevealingSection = ({ title, description }: RevealingSectionProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      }
    );
  });

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
