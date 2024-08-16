import styled, { useTheme } from 'styled-components';
import { PositioningDiv } from '../pages/HomePage';
import ViteLogo from '../assets/Icons/Vite';
import FlareCard from './FlareCard';
import GlowEffect from './GlowEffect';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import RevealingSection from './RevealingSection';
import SvgVercelLogo from '../assets/Icons/VercelLogo';
import {
  SiPnpm,
  SiReact,
  SiRollupdotjs,
  SiTestinglibrary,
  SiTypescript,
} from '@icons-pack/react-simple-icons';
import SvgStyledComponentsLogo from '../assets/Icons/StyledComponentsLogo';

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

const SkillWrapper = styled.div({
  height: '100px',
  width: '100%',
  '& div': {
    width: '100%',
    maxWidth: '70vw',
  },
});

const SkillInnerWrapper = styled.div({
  height: '100px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'column',
});

interface InViewProps {
  inView?: boolean;
}

const SkillsSection = ({ inView }: InViewProps) => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const inViewRef = useRef(false);

  useGSAP(() => {
    if (skillsRef.current) {
      const items = skillsRef.current.children;
      gsap.set(items, { opacity: 0, y: 70 });
    }
  }, [inView]);

  useEffect(() => {
    if (inView && !inViewRef.current) {
      inViewRef.current = true;
      if (skillsRef.current) {
        const items = skillsRef.current.children;
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: 'power2.out',
          delay: 0.6,
        });
      }
    }
  }, [inView]);

  return (
    <>
      <RevealingSection
        inView={inView}
        title="My main tech stack"
        description={
          <>
            These technologies represent the core of my technical expertise.
            However, my skill set extends beyond these tools and frameworks
            which you can explore in more detail in my{' '}
            <Link to="/uses">uses page</Link>.
          </>
        }
      />
      <SkillsWrapper ref={skillsRef}>
        <SkillWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={40} $borderRadius={5} $disableTouch>
              <SkillInnerWrapper>
                <SiReact fill={theme.palette.primary} height={32} width={32} />
                React
              </SkillInnerWrapper>
            </FlareCard>
          </GlowEffect>
        </SkillWrapper>
        <SkillWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={40} $borderRadius={5} $disableTouch>
              <SkillInnerWrapper>
                <SiTypescript
                  fill={theme.palette.primary}
                  height={32}
                  width={32}
                />
                Typescript
              </SkillInnerWrapper>
            </FlareCard>
          </GlowEffect>
        </SkillWrapper>
        <SkillWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={40} $borderRadius={5} $disableTouch>
              <SkillInnerWrapper>
                <ViteLogo fill={theme.palette.primary} />
                Vite
              </SkillInnerWrapper>
            </FlareCard>
          </GlowEffect>
        </SkillWrapper>
        <SkillWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={40} $borderRadius={5} $disableTouch>
              <SkillInnerWrapper>
                <SvgStyledComponentsLogo
                  fill={theme.palette.primary}
                  height={32}
                  width={32}
                />
                Styled Components
              </SkillInnerWrapper>
            </FlareCard>
          </GlowEffect>
        </SkillWrapper>
        <SkillWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={40} $borderRadius={5} $disableTouch>
              <SkillInnerWrapper>
                <SiPnpm fill={theme.palette.primary} height={32} width={32} />
                pnpm
              </SkillInnerWrapper>
            </FlareCard>
          </GlowEffect>
        </SkillWrapper>
        <SkillWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={40} $borderRadius={5} $disableTouch>
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
            <FlareCard $intensity={40} $borderRadius={5} $disableTouch>
              <SkillInnerWrapper>
                <SiRollupdotjs
                  fill={theme.palette.primary}
                  height={32}
                  width={32}
                />
                Rollup
              </SkillInnerWrapper>
            </FlareCard>
          </GlowEffect>
        </SkillWrapper>
        <SkillWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={40} $borderRadius={5} $disableTouch>
              <SkillInnerWrapper>
                <SiTestinglibrary
                  fill={theme.palette.primary}
                  height={32}
                  width={32}
                />
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
