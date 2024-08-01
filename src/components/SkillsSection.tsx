import styled, { useTheme } from 'styled-components';
import { PositioningDiv } from '../pages/HomePage';
import ReactLogo from '../assets/Icons/React';
import TypescriptLogo from '../assets/Icons/Typescript';
import ViteLogo from '../assets/Icons/Vite';
import StitchesLogo from '../assets/Icons/Stitches';
import FlareCard from './FlareCard';
import GlowEffect from './GlowEffect';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import RevealingSection from './RevealingSection';
import SvgGsapGreensock from '../assets/Icons/GsapGreensock';
import SvgVercelLogo from '../assets/Icons/VercelLogo';
import SvgRollupLogo from '../assets/Icons/RollupLogo';
import SvgTestinglibrary from '../assets/Icons/Testinglibrary';

const SkillsWrapper = styled(PositioningDiv)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '16px',
  width: '100%',
  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'center',
  marginTop: '5vh',
  [theme.breakpoints.max.tablet]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

const SkillWrapper = styled('div')({
  height: '100px',
  width: '100%',
  '& div': {
    width: '100%',
    maxWidth: '70vw',
  },
});

const SkillInnerWrapper = styled('div')({
  height: '100px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'column',
});

const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useGSAP(() => {
    if (skillsRef.current) {
      const items = skillsRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
          delay: 0.6,
        }
      );
    }
  }, []);

  return (
    <>
      <RevealingSection
        title="My main tech stack"
        description={
          <>
            These technologies represent the core of my technical expertise.
            However, my skill set extends beyond these tools and frameworks
            which you can explore in more detail <Link to="/uses">here</Link>.
          </>
        }
      />
      <SkillsWrapper ref={skillsRef}>
        <SkillWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={40} $borderRadius={5} disableTouch>
              <SkillInnerWrapper>
                <ReactLogo fill={theme.palette.primary} />
                React
              </SkillInnerWrapper>
            </FlareCard>
          </GlowEffect>
        </SkillWrapper>
        <SkillWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={40} $borderRadius={5} disableTouch>
              <SkillInnerWrapper>
                <TypescriptLogo fill={theme.palette.primary} />
                Typescript
              </SkillInnerWrapper>
            </FlareCard>
          </GlowEffect>
        </SkillWrapper>
        <SkillWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={40} $borderRadius={5} disableTouch>
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
        <SkillWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={40} $borderRadius={5} disableTouch>
              <SkillInnerWrapper>
                <StitchesLogo fill={theme.palette.primary} />
                Stitches
              </SkillInnerWrapper>
            </FlareCard>
          </GlowEffect>
        </SkillWrapper>
        <SkillWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={40} $borderRadius={5} disableTouch>
              <SkillInnerWrapper>
                <SvgGsapGreensock fill={theme.palette.primary} height={32} />
                GSAP
              </SkillInnerWrapper>
            </FlareCard>
          </GlowEffect>
        </SkillWrapper>
        <SkillWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={40} $borderRadius={5} disableTouch>
              <SkillInnerWrapper>
                <SvgVercelLogo
                  fill={theme.palette.primary}
                  height={32}
                  width={32}
                />
                Vercel
              </SkillInnerWrapper>
            </FlareCard>
          </GlowEffect>
        </SkillWrapper>
        <SkillWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={40} $borderRadius={5} disableTouch>
              <SkillInnerWrapper>
                <SvgRollupLogo fill={theme.palette.primary} height={32} />
                Rollup
              </SkillInnerWrapper>
            </FlareCard>
          </GlowEffect>
        </SkillWrapper>
        <SkillWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={40} $borderRadius={5} disableTouch>
              <SkillInnerWrapper>
                <SvgTestinglibrary fill={theme.palette.primary} height={32} />
                Testing Library
              </SkillInnerWrapper>
            </FlareCard>
          </GlowEffect>
        </SkillWrapper>
      </SkillsWrapper>
    </>
  );
};

export default SkillsSection;
