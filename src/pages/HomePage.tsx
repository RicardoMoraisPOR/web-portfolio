import styled, { useTheme } from 'styled-components';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import ReactLogo from '../assets/React';
import TypescriptLogo from '../assets/Typescript';
import ViteLogo from '../assets/Vite';
import StitchesLogo from '../assets/Stitches';
import ShiverSpan from '../components/ShiverSpan';
import FlareCard from '../components/FlareCard';
import GlowEffect from '../components/GlowEffect';

const InlineDiv = styled('div')({
  display: 'inline-block',
});

const SkillWrapper = styled('div')({
  height: '100px',
  width: '100%',
  '& div': {
    width: '100%',
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

const PositioningDiv = styled('div')(({ theme }) => {
  return {
    marginTop: '10vh',
    [theme.breakpoints.max.mobile]: {
      marginTop: '30px',
    },
  };
});

const SkillsPositioningDiv = styled(PositioningDiv)({
  width: '100%',
});

const Title = styled('h1')({
  margin: '30px 0px 16px 0px',
});

const Subtitle = styled('span')(({ theme }) => {
  return {
    color: theme.palette.primary,
  };
});

const SkillsWrapper = styled(PositioningDiv)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '16px',
  width: '100%',
  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'center',
  marginTop: '20px',
  [theme.breakpoints.max.tablet]: {
    marginTop: '50px',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

const IntroTextWrapper = styled('div')(({ theme }) => ({
  width: '50vw',
  [theme.breakpoints.max.tablet]: {
    width: '100%',
  },
}));

const IntroTextAbout = styled('span')(({ theme }) => {
  return {
    color: theme.palette.text,
  };
});

const IntroTextBold = styled(IntroTextAbout)({
  fontWeight: '800',
});

const CompanyThemeText = styled(Link)({
  color: '#b5d823',
  fontWeight: '800',
});

const HomePageWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const HomePage = () => {
  const emojiRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useGSAP(() => {
    gsap
      .timeline({
        paused: true,
      })
      .to(emojiRef.current, {
        rotate: -10,
        x: -10,
        delay: 0.8,
        duration: 0.2,
      })
      .to(emojiRef.current, {
        rotate: 20,
        x: 10,
        y: -20,
        duration: 0.4,
      })
      .to(emojiRef.current, {
        rotate: -20,
        x: -20,
        y: -20,
        duration: 0.3,
        ease: 'power5.inOut',
      })
      .to(emojiRef.current, {
        rotate: 0,
        x: 0,
        y: 0,
        delay: 0.5,
        duration: 0.5,
        ease: 'powe1.out',
      })
      .play();
  });

  return (
    <HomePageWrapper>
      <PositioningDiv>
        <Title>
          Hello <InlineDiv ref={emojiRef}>✌️</InlineDiv>, my name is Ricardo
          Morais.
        </Title>
      </PositioningDiv>
      <Subtitle>I’m a Frontend Developer</Subtitle>
      <PositioningDiv>
        <IntroTextWrapper>
          <IntroTextAbout>
            Currently working as{' '}
            <IntroTextBold>Software Engineer</IntroTextBold> at{' '}
            <CompanyThemeText to="https://www.nextbitt.com/">
              Nextbitt
            </CompanyThemeText>{' '}
            while living on the beautiful Madeira Island 🏝️. I didn't want this
            to be just another generic portfolio website, so I've added some
            secrets to make exploring the site more fun and engaging, happy
            hunting! <ShiverSpan>🚀</ShiverSpan>. You can see more about me{' '}
            <Link to="/about">here</Link>.
          </IntroTextAbout>
        </IntroTextWrapper>
      </PositioningDiv>
      <SkillsPositioningDiv>
        <h3>My main tech stack</h3>
        <SkillsWrapper>
          <SkillWrapper>
            <GlowEffect $transparency={15}>
              <FlareCard $intensity={40} $borderRadius={5}>
                <SkillInnerWrapper>
                  <ReactLogo fill={theme.palette.primary} />
                  React
                </SkillInnerWrapper>
              </FlareCard>
            </GlowEffect>
          </SkillWrapper>
          <SkillWrapper>
            <GlowEffect $transparency={15}>
              <FlareCard $intensity={40} $borderRadius={5}>
                <SkillInnerWrapper>
                  <TypescriptLogo fill={theme.palette.primary} />
                  Typescript
                </SkillInnerWrapper>
              </FlareCard>
            </GlowEffect>
          </SkillWrapper>
          <SkillWrapper>
            <GlowEffect $transparency={15}>
              <FlareCard $intensity={40} $borderRadius={5}>
                <SkillInnerWrapper>
                  <ViteLogo
                    fill={theme.palette.primary}
                    secondaryFill={theme.palette.accent}
                  />
                  Vite
                </SkillInnerWrapper>
              </FlareCard>
            </GlowEffect>
          </SkillWrapper>
          <SkillWrapper>
            <GlowEffect $transparency={15}>
              <FlareCard $intensity={40} $borderRadius={5}>
                <SkillInnerWrapper>
                  <StitchesLogo fill={theme.palette.primary} />
                  Stitches
                </SkillInnerWrapper>
              </FlareCard>
            </GlowEffect>
          </SkillWrapper>
        </SkillsWrapper>
      </SkillsPositioningDiv>
    </HomePageWrapper>
  );
};

export default HomePage;
