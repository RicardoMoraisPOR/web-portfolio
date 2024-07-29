import styled, { useTheme } from 'styled-components';
import { PositioningDiv } from '../pages/HomePage';
import ReactLogo from '../assets/React';
import TypescriptLogo from '../assets/Typescript';
import ViteLogo from '../assets/Vite';
import FlareCard from './FlareCard';
import GlowEffect from './GlowEffect';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import RevealingSection from './RevealingSection';

const SkillsWrapper = styled(PositioningDiv)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
  width: '100%',
  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'center',
  marginTop: '5vh',
  [theme.breakpoints.max.desktop]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.max.tablet]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

const SkillWrapper = styled('div')(({ theme }) => ({
  height: '500px',
  width: '100%',
  [theme.breakpoints.max.desktop]: {
    height: '400px',
  },
  [theme.breakpoints.max.tablet]: {
    height: '300px',
  },
  '& div': {
    width: '100%',
    maxWidth: '70vw',
    [theme.breakpoints.max.tablet]: {
      maxWidth: '100%',
    },
  },
}));

const SkillInnerWrapper = styled('div')(({ theme }) => ({
  height: '500px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.max.desktop]: {
    height: '400px',
  },
  [theme.breakpoints.max.tablet]: {
    height: '300px',
  },
}));

const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useGSAP(() => {
    if (skillsRef.current) {
      const items = skillsRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.5,
          ease: 'power2.out',
          delay: 0.6,
        }
      );
    }
  }, []);

  return (
    <>
      <RevealingSection
        title="Personal Projects"
        description={
          <>
            These technologies represent the core of my technical expertise.
            However, my skill set extends beyond these tools and frameworks
            which you can explore in more detail <Link to="/about">here</Link>.
          </>
        }
      />
      <SkillsWrapper ref={skillsRef}>
        <SkillWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={80} $borderRadius={5} disableTouch>
              <SkillInnerWrapper>
                <ReactLogo fill={theme.palette.primary} />
                React
              </SkillInnerWrapper>
            </FlareCard>
          </GlowEffect>
        </SkillWrapper>
        <SkillWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={80} $borderRadius={5} disableTouch>
              <SkillInnerWrapper>
                <TypescriptLogo fill={theme.palette.primary} />
                Typescript
              </SkillInnerWrapper>
            </FlareCard>
          </GlowEffect>
        </SkillWrapper>
        <SkillWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={80} $borderRadius={5} disableTouch>
              <SkillInnerWrapper>
                <ViteLogo
                  fill={theme.palette.primary}
                  secondaryfill={theme.palette.accent}
                />
                Vite
              </SkillInnerWrapper>
            </FlareCard>
          </GlowEffect>
        </SkillWrapper>
      </SkillsWrapper>
    </>
  );
};

export default SkillsSection;
