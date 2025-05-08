import SvgGsapGreensock from '@assets/Icons/GsapGreensock';
import SvgVercelLogo from '@assets/Icons/VercelLogo';
import ViteLogo from '@assets/Icons/Vite';
import FlareCard from '@components/FlareCard/FlareCard';
import GlowEffect from '@components/GlowEffect/GlowEffect';
import { useGSAP } from '@gsap/react';
import {
  SiNextdotjs,
  SiReact,
  SiStorybook,
  SiTestinglibrary,
  SiTypescript,
} from '@icons-pack/react-simple-icons';
import gsap from 'gsap';
import { useRef } from 'react';
import { useTheme } from 'styled-components';
import { SkillInnerWrapper, SkillsWrapper, SkillWrapper } from './home.styles';
import { InViewProps } from './home.types';

const SkillsSection = ({ inView }: InViewProps) => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useGSAP(() => {
    if (skillsRef.current) {
      const items = skillsRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, y: 40, x: 30 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'expo.inOut',
        }
      );
    }
  }, [inView]);

  return (
    <SkillsWrapper ref={skillsRef}>
      <SkillWrapper>
        <GlowEffect $transparency={15}>
          <FlareCard $intensity={20} $borderRadius={5} $disableTouch>
            <SkillInnerWrapper>
              <SiReact fill={theme.palette.primary} height={16} width={16} />
              React
            </SkillInnerWrapper>
          </FlareCard>
        </GlowEffect>
      </SkillWrapper>
      <SkillWrapper>
        <GlowEffect $transparency={15}>
          <FlareCard $intensity={20} $borderRadius={5} $disableTouch>
            <SkillInnerWrapper>
              <SiTypescript
                fill={theme.palette.primary}
                height={16}
                width={16}
              />
              Typescript
            </SkillInnerWrapper>
          </FlareCard>
        </GlowEffect>
      </SkillWrapper>
      <SkillWrapper>
        <GlowEffect $transparency={15}>
          <FlareCard $intensity={20} $borderRadius={5} $disableTouch>
            <SkillInnerWrapper>
              <ViteLogo fill={theme.palette.primary} height={16} width={16} />
              Vite
            </SkillInnerWrapper>
          </FlareCard>
        </GlowEffect>
      </SkillWrapper>
      <SkillWrapper>
        <GlowEffect $transparency={15}>
          <FlareCard $intensity={20} $borderRadius={5} $disableTouch>
            <SkillInnerWrapper>
              <SiStorybook
                fill={theme.palette.primary}
                height={16}
                width={16}
              />
              Storybook
            </SkillInnerWrapper>
          </FlareCard>
        </GlowEffect>
      </SkillWrapper>
      <SkillWrapper>
        <GlowEffect $transparency={15}>
          <FlareCard $intensity={20} $borderRadius={5} $disableTouch>
            <SkillInnerWrapper>
              <SiNextdotjs
                fill={theme.palette.primary}
                height={16}
                width={16}
              />
              NextJS
            </SkillInnerWrapper>
          </FlareCard>
        </GlowEffect>
      </SkillWrapper>
      <SkillWrapper>
        <GlowEffect $transparency={15}>
          <FlareCard $intensity={20} $borderRadius={5} $disableTouch>
            <SkillInnerWrapper>
              <SvgVercelLogo
                fill={theme.palette.primary}
                height={16}
                width={16}
              />
              Vercel
            </SkillInnerWrapper>
          </FlareCard>
        </GlowEffect>
      </SkillWrapper>
      <SkillWrapper>
        <GlowEffect $transparency={15}>
          <FlareCard $intensity={20} $borderRadius={5} $disableTouch>
            <SkillInnerWrapper>
              <SvgGsapGreensock
                fill={theme.palette.primary}
                height={16}
                width={16}
              />
              GSAP
            </SkillInnerWrapper>
          </FlareCard>
        </GlowEffect>
      </SkillWrapper>
      <SkillWrapper>
        <GlowEffect $transparency={15}>
          <FlareCard $intensity={20} $borderRadius={5} $disableTouch>
            <SkillInnerWrapper>
              <SiTestinglibrary
                fill={theme.palette.primary}
                height={16}
                width={16}
              />
              Testing Library
            </SkillInnerWrapper>
          </FlareCard>
        </GlowEffect>
      </SkillWrapper>
    </SkillsWrapper>
  );
};

export default SkillsSection;
