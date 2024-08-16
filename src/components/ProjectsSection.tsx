import styled, { CSSObject, useTheme } from 'styled-components';
import { PositioningDiv } from '../pages/HomePage';
import FlareCard from './FlareCard';
import GlowEffect from './GlowEffect';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SVGProps, useEffect, useMemo, useRef } from 'react';
import RevealingSection from './RevealingSection';
import TailwindJssLogo from '../assets/Icons/TailwindJssLogo';
import { alphaHexConverter } from '../theme/AppThemeUtils';
import Logo from './Logo';
import HatLogo from '../assets/Icons/HatLogo';
import { Link } from 'react-router-dom';
import SvgVite from '../assets/Icons/Vite';
import SvgGsapGreensock from '../assets/Icons/GsapGreensock';
import SvgLottieFilesLogo from '../assets/Icons/LottieFilesLogo';
import SvgVercelLogo from '../assets/Icons/VercelLogo';
import SvgStitches from '../assets/Icons/Stitches';
import Tooltip from './Tooltip';
import SvgRadixUi from '../assets/Icons/RadixUi';
import SvgStyledComponentsLogo from '../assets/Icons/StyledComponentsLogo';
import { SiPnpm, SiReact, SiTypescript } from '@icons-pack/react-simple-icons';
import { useSecretContext } from '../hooks/useSecret';

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

const ProjectWrapper = styled.div(({ theme }) => ({
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

const ProjectInnerWrapper = styled.div(({ theme }) => ({
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

const ProjectImageWrapper = styled.div(({ theme }) => ({
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

const ProjectTitleButton = styled.button(({ theme }) => ({
  fontFamily: theme.fonts.lato,
  fontSize: '20px',
  background: 'none',
  border: 'none',
  padding: '0',
  margin: '0',
  font: 'inherit',
  cursor: 'pointer',
  width: 'fit-content',
  lineHeight: 1.6,
  letterSpacing: '0.5px',
  color: theme.palette.text,
  position: 'relative',
  transition: `color ${theme.transitions.fast}ms linear`,
  textDecoration: 'none', // Remove the default underline
  '&:hover': {
    color: theme.palette.primary,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '-1.5px', // Adjust this value to move the underline lower
    height: '1px', // Adjust the thickness of the underline
    backgroundColor: 'currentColor', // Use the text color for the underline
  },
}));

const ProjectTitleNoLink = styled.span(({ theme }) => ({
  fontFamily: theme.fonts.lato,
  fontSize: '20px',
}));

const ProjectDescription = styled.span({
  fontSize: '14px',
  margin: '10px 0px',
});

const ProjectSkills = styled.div(({ theme }) => ({
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

interface ProjectSkillProps {
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  iconComponent?: JSX.Element;
  name: string;
}
interface ProjectProps {
  title: string;
  icon: (
    props: SVGProps<SVGSVGElement> & {
      $height?: CSSObject['height'];
    }
  ) => JSX.Element;
  height?: CSSObject['height'];
  link?: string | (() => void);
  description?: string;
  skills: Array<ProjectSkillProps>;
}

interface InViewProps {
  inView?: boolean;
}

const ProjectsSection = ({ inView }: InViewProps) => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const { secrets } = useSecretContext();
  const theme = useTheme();
  const inViewRef = useRef(false);

  const projects: Array<ProjectProps> = useMemo(() => {
    return [
      {
        icon: TailwindJssLogo,
        title: 'Tailwind 2 JSS',
        description:
          'This project transforms Tailwind CSS classes into JSS. It simplifies the process of converting styles across different styling libraries.',
        skills: [
          {
            name: 'Vite',
            icon: SvgVite,
            iconSecondaryFill: theme.palette.accent,
          },
          { name: 'Stitches', icon: SvgStitches },
          { name: 'Vercel', icon: SvgVercelLogo },
          {
            name: 'React',
            iconComponent: (
              <SiReact height={20} width={20} fill={theme.palette.primary} />
            ),
          },
          {
            name: 'Typescript',
            iconComponent: (
              <SiTypescript
                height={20}
                width={20}
                fill={theme.palette.primary}
              />
            ),
          },
        ],
      },
      {
        icon: Logo,
        height: 90,
        title: 'Portfolio Website',
        link: secrets.secretRecursion.hasFoundSecret
          ? 'https://ricardomorais.dev'
          : () => {
              localStorage.setItem('recursionInit', 'true');
              window.location.reload();
            },
        description:
          'This is my personal portfolio website, the one you are visiting right now, it was built using my favorite tools and technologies.',
        skills: [
          {
            name: 'pnpm',
            iconComponent: (
              <SiPnpm height={20} width={20} fill={theme.palette.primary} />
            ),
          },
          { name: 'Radix UI', icon: SvgRadixUi },
          {
            name: 'Lottie',
            icon: SvgLottieFilesLogo,
          },
          { name: 'GSAP', icon: SvgGsapGreensock },
          {
            name: 'Vite',
            icon: SvgVite,
            iconSecondaryFill: theme.palette.accent,
          },
          { name: 'Styled Components', icon: SvgStyledComponentsLogo },
          { name: 'Vercel', icon: SvgVercelLogo },
          {
            name: 'React',
            iconComponent: (
              <SiReact height={20} width={20} fill={theme.palette.primary} />
            ),
          },
          {
            name: 'Typescript',
            iconComponent: (
              <SiTypescript
                height={20}
                width={20}
                fill={theme.palette.primary}
              />
            ),
          },
        ],
      },
      {
        icon: HatLogo,
        iconSecondaryFill: theme.palette.secondary,
        title: 'HexAlphaTool',
        description:
          'HexAlphaTool (HAT) is an online utility tool that allows users to add alpha transparency to hex color codes, enabling users to generate hex color codes on the fly.',
        skills: [
          {
            name: 'Vite',
            icon: SvgVite,
            iconSecondaryFill: theme.palette.accent,
          },
          { name: 'Stitches', icon: SvgStitches },
          { name: 'Vercel', icon: SvgVercelLogo },
          {
            name: 'React',
            iconComponent: (
              <SiReact height={20} width={20} fill={theme.palette.primary} />
            ),
          },
          {
            name: 'Typescript',
            iconComponent: (
              <SiTypescript
                height={20}
                width={20}
                fill={theme.palette.primary}
              />
            ),
          },
        ],
      },
    ] as Array<ProjectProps>;
  }, [
    secrets.secretRecursion.hasFoundSecret,
    theme.palette.accent,
    theme.palette.primary,
    theme.palette.secondary,
  ]);

  useGSAP(() => {
    if (projectsRef.current) {
      const items = projectsRef.current.children;
      gsap.set(items, { opacity: 0, y: 100 });
    }
  }, []);

  useEffect(() => {
    if (inView && !inViewRef.current) {
      inViewRef.current = true;
      if (projectsRef.current) {
        const items = projectsRef.current.children;
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.3,
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
      <ProjectsWrapper ref={projectsRef}>
        {projects.map((projectData) => (
          <ProjectWrapper key={projectData.title}>
            <GlowEffect $transparency={15}>
              <FlareCard $intensity={80} $borderRadius={5} $disableTouch>
                <ProjectInnerWrapper>
                  <ProjectImageWrapper>
                    {projectData.icon({
                      fill: theme.palette.primary,
                      $height: projectData.height,
                    })}
                  </ProjectImageWrapper>
                  {projectData.link && typeof projectData.link === 'string' && (
                    <ProjectTitle to={projectData.link} target="_blank">
                      {projectData.title}
                    </ProjectTitle>
                  )}
                  {projectData.link &&
                    typeof projectData.link === 'function' && (
                      <ProjectTitleButton onClick={projectData.link}>
                        {projectData.title}
                      </ProjectTitleButton>
                    )}
                  {projectData.link === undefined && (
                    <ProjectTitleNoLink>{projectData.title}</ProjectTitleNoLink>
                  )}
                  <ProjectDescription>
                    {projectData.description}
                  </ProjectDescription>
                  <ProjectSkills>
                    {projectData.skills.map((skillData) => (
                      <Tooltip
                        name={`${projectData.title}-${skillData.name}`}
                        tooltipContent={skillData.name}
                        key={skillData.name}
                      >
                        {skillData.iconComponent ??
                          skillData.icon?.({
                            height: 20,
                            width: 20,
                            fill: theme.palette.primary,
                          })}
                      </Tooltip>
                    ))}
                  </ProjectSkills>
                </ProjectInnerWrapper>
              </FlareCard>
            </GlowEffect>
          </ProjectWrapper>
        ))}
      </ProjectsWrapper>
    </>
  );
};

export default ProjectsSection;
