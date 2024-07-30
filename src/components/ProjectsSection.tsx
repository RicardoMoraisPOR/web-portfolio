import styled, { useTheme } from 'styled-components';
import { PositioningDiv } from '../pages/HomePage';
import FlareCard from './FlareCard';
import GlowEffect from './GlowEffect';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import RevealingSection from './RevealingSection';
import TailwindJssLogo from '../assets/TailwindJssLogo';
import { alphaHexConverter } from '../theme/AppThemeUtils';
import Logo from './Logo';
import HatLogo from '../assets/HatLogo';
import { Link } from 'react-router-dom';
import SvgTypescript from '../assets/Typescript';
import SvgReact from '../assets/React';
import StyledComponentsLogo from '../assets/StyledComponentsLogo';
import SvgVite from '../assets/Vite';
import SvgGsapGreensock from '../assets/GsapGreensock';
import SvgLottieFilesLogo from '../assets/LottieFilesLogo';
import SvgVercelLogo from '../assets/VercelLogo';
import SvgStitches from '../assets/Stitches';

const ProjectsWrapper = styled(PositioningDiv)(({ theme }) => ({
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
    gap: '30px',
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

const ProjectWrapper = styled('div')(({ theme }) => ({
  minHeight: '500px',
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

const ProjectInnerWrapper = styled('div')(({ theme }) => ({
  minHeight: '500px',
  padding: '20px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.max.desktop]: {
    height: '400px',
  },
  [theme.breakpoints.max.tablet]: {
    height: '300px',
  },
}));

const ProjectImageWrapper = styled('div')(({ theme }) => ({
  background: alphaHexConverter(theme.palette.accent, 20),
  height: '200px',
  marginBottom: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const ProjectTitle = styled(Link)(({ theme }) => ({
  fontFamily: theme.fonts.lato,
  fontSize: '20px',
}));

const ProjectTitleNoLink = styled('span')(({ theme }) => ({
  fontFamily: theme.fonts.lato,
  fontSize: '20px',
}));

const ProjectDescription = styled('span')({
  fontSize: '14px',
  margin: '10px 0px',
});

const ProjectLinks = styled('div')(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'end',
  gap: '10px',
  [theme.breakpoints.max.tablet]: {
    gap: '5px',
  },
  '& svg': {
    opacity: '40%',
    transition: `opacity ${theme.transitions.fast}ms ease`,
    '&:hover': {
      opacity: '100%',
    },
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
            Here are some of my projects, I developed them because I couldn't
            find suitable solutions for some of my day to day coding needs. They
            are all open-sourced so feel free to explore the details and see
            what I'm currently working on.
          </>
        }
      />
      <ProjectsWrapper ref={skillsRef}>
        <ProjectWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={80} $borderRadius={5} disableTouch>
              <ProjectInnerWrapper>
                <ProjectImageWrapper>
                  <TailwindJssLogo fill={theme.palette.primary} />
                </ProjectImageWrapper>
                <ProjectTitleNoLink>Tailwind 2 JSS</ProjectTitleNoLink>
                <ProjectDescription>
                  This project transforms Tailwind CSS classes into JSS. It
                  simplifies the process of converting styles across different
                  styling libraries.
                </ProjectDescription>
                <ProjectLinks>
                  <SvgVite
                    fill={theme.palette.primary}
                    secondaryfill={theme.palette.accent}
                    height={20}
                    width={20}
                  />
                  <SvgStitches
                    height={20}
                    width={20}
                    fill={theme.palette.primary}
                  />
                  <SvgVercelLogo
                    height={20}
                    width={20}
                    fill={theme.palette.primary}
                  />
                  <SvgReact
                    height={20}
                    width={20}
                    fill={theme.palette.primary}
                  />
                  <SvgTypescript
                    height={20}
                    width={20}
                    fill={theme.palette.primary}
                  />
                </ProjectLinks>
              </ProjectInnerWrapper>
            </FlareCard>
          </GlowEffect>
        </ProjectWrapper>
        <ProjectWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={80} $borderRadius={5} disableTouch>
              <ProjectInnerWrapper>
                <ProjectImageWrapper>
                  <Logo fill={theme.palette.primary} $height={90} />
                </ProjectImageWrapper>
                <ProjectTitle to="https://ricardomorais.dev">
                  Portfolio Website
                </ProjectTitle>
                <ProjectDescription>
                  This is my personal portfolio website, the one you are
                  visiting right now, it was built using my favorite tools and
                  technologies.
                </ProjectDescription>
                <ProjectLinks>
                  <SvgLottieFilesLogo
                    height={20}
                    width={20}
                    fill={theme.palette.primary}
                  />
                  <SvgGsapGreensock
                    height={20}
                    width={20}
                    fill={theme.palette.primary}
                  />
                  <SvgVite
                    fill={theme.palette.primary}
                    secondaryfill={theme.palette.accent}
                    height={20}
                    width={20}
                  />
                  <StyledComponentsLogo
                    height={20}
                    width={20}
                    fill={theme.palette.primary}
                  />
                  <SvgVercelLogo
                    height={20}
                    width={20}
                    fill={theme.palette.primary}
                  />
                  <SvgReact
                    height={20}
                    width={20}
                    fill={theme.palette.primary}
                  />
                  <SvgTypescript
                    height={20}
                    width={20}
                    fill={theme.palette.primary}
                  />
                </ProjectLinks>
              </ProjectInnerWrapper>
            </FlareCard>
          </GlowEffect>
        </ProjectWrapper>
        <ProjectWrapper>
          <GlowEffect $transparency={15}>
            <FlareCard $intensity={80} $borderRadius={5} disableTouch>
              <ProjectInnerWrapper>
                <ProjectImageWrapper>
                  <HatLogo
                    fill={theme.palette.primary}
                    secondaryfill={theme.palette.secondary}
                  />
                </ProjectImageWrapper>
                <ProjectTitleNoLink>HexAlphaTool</ProjectTitleNoLink>
                <ProjectDescription>
                  HexAlphaTool (HAT) is an online utility tool that allows users
                  to add alpha transparency to hex color codes, enabling users
                  to generate hex color codes on the fly.
                </ProjectDescription>
                <ProjectLinks>
                  <SvgVite
                    fill={theme.palette.primary}
                    secondaryfill={theme.palette.accent}
                    height={20}
                    width={20}
                  />
                  <SvgStitches
                    height={20}
                    width={20}
                    fill={theme.palette.primary}
                  />
                  <SvgVercelLogo
                    height={20}
                    width={20}
                    fill={theme.palette.primary}
                  />
                  <SvgReact
                    height={20}
                    width={20}
                    fill={theme.palette.primary}
                  />
                  <SvgTypescript
                    height={20}
                    width={20}
                    fill={theme.palette.primary}
                  />
                </ProjectLinks>
              </ProjectInnerWrapper>
            </FlareCard>
          </GlowEffect>
        </ProjectWrapper>
      </ProjectsWrapper>
    </>
  );
};

export default SkillsSection;
