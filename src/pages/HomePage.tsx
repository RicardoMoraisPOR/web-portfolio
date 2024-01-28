import styled, { useTheme } from 'styled-components';
import FlareCard from '../components/FlareCard';
import GlowEffect, { GlowEffectStyle } from '../components/GlowEffect';
import StackOverflowIcon from '../assets/StackOverflow';
import GithubIcon from '../assets/Github';
import LinkedInIcon from '../assets/LinkedIn';
import useMediaQuery from '../hooks/useMediaQuery';
import { ReactNode, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const EmojiHello = styled('div')({
  display: 'inline-block',
});

const StatusWrapper = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-around',
    width: 'clamp(5rem, 90vw, 60rem)',
    padding: '1rem',
    [theme.breakpoints.max.mobile]: {
      width: '80vw',
    },
  };
});

const StatusGroup = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.max.mobile]: {
      height: '5rem',
    },
  };
});

const StatusTitle = styled('span')(({ theme }) => {
  return {
    color: theme.palette.text,
    fontWeight: 300,
    fontSize: '16px',
    marginBottom: '15px',
  };
});

const StatusYears = styled('span')(({ theme }) => {
  return {
    color: theme.palette.primary,
    fontWeight: 800,
    fontSize: '40px',
    [theme.breakpoints.max.mobile]: {
      fontSize: '30px',
    },
  };
});

const StatusDescription = styled('span')(({ theme }) => {
  return {
    color: theme.palette.primary,
    fontWeight: 600,
    fontSize: '20px',
    [theme.breakpoints.max.mobile]: {
      fontSize: '16px',
    },
  };
});

const StatusDescriptionSmall = styled('span')(({ theme }) => {
  return {
    color: theme.palette.primary,
    fontWeight: 600,
    fontSize: '12px',
    [theme.breakpoints.max.mobile]: {
      flexDirection: 'column',
      gap: 30,
    },
  };
});

const SocialIconLink = styled('a')(({ theme }) => {
  const glowStyle = GlowEffectStyle(theme, { $transparency: 100 });

  return {
    cursor: 'pointer',
    display: 'flex',
    ...glowStyle.animation,
    svg: {
      fill: theme.palette.primary,
      opacity: '20%',
      width: '2rem',
      height: '2rem',
      transition: `opacity ${theme.transitions.fast}ms ease, fill ${theme.transitions.fast}ms ease`,
    },
    '&:hover': {
      svg: {
        fill: theme.palette.primary,
        opacity: '100%',
      },
      ...glowStyle.filter,
    },
    '&:focus-visible:not(:hover)': {
      svg: {
        fill: theme.palette.primary,
        opacity: '100%',
        ...glowStyle.filter,
      },
    },
  };
});

const SocialsWrapper = styled('div')({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'space-around',
  padding: '1rem',
  marginTop: '3rem',
});

const StatusDescriptionWrapper = styled('div')({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Company = styled('a')({
  color: '#B5D823',
  fontStyle: 'italic',
});

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.max.mobile);
  const emojiRef = useRef<HTMLDivElement>(null);

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

  const codingStatus: ReactNode = (
    <StatusGroup>
      <StatusTitle>Coding For</StatusTitle>
      <StatusDescriptionWrapper>
        <StatusYears>8 Years</StatusYears>
      </StatusDescriptionWrapper>
    </StatusGroup>
  );
  const workStatus: ReactNode = (
    <StatusGroup>
      <StatusTitle>Work Status</StatusTitle>
      <StatusDescriptionWrapper>
        <StatusDescription>
          Currently @{' '}
          <Company
            href="https://www.nextbitt.com/en"
            target="_blank"
            aria-label="Nextbitt website"
          >
            Nextbitt
          </Company>
        </StatusDescription>
      </StatusDescriptionWrapper>
    </StatusGroup>
  );
  const livingStatus: ReactNode = (
    <StatusGroup>
      <StatusTitle>Living In</StatusTitle>
      <StatusDescriptionWrapper>
        <StatusDescription>Madeira Island 🏝️</StatusDescription>
        <StatusDescriptionSmall>Portugal</StatusDescriptionSmall>
      </StatusDescriptionWrapper>
    </StatusGroup>
  );

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: '5rem 0px 1rem 0px' }}>
        Hello <EmojiHello ref={emojiRef}>✌️</EmojiHello>, My name is Ricardo
        Morais.
      </h1>
      <span>I’m a Frontend Developer</span>
      <SocialsWrapper>
        <SocialIconLink
          href="https://github.com/RicardoMoraisPOR"
          target="_blank"
          aria-label="Ricardo Morais Github profile"
        >
          <GithubIcon />
        </SocialIconLink>
        <SocialIconLink
          href="https://www.linkedin.com/in/ricardo-morais-aa3061205/"
          target="_blank"
          aria-label="Ricardo Morais LinkedIn profile"
        >
          <LinkedInIcon />
        </SocialIconLink>
        <SocialIconLink
          href="https://stackoverflow.com/users/8182493/ricardo-dias-morais"
          target="_blank"
          aria-label="Ricardo Morais StackOverflow profile"
        >
          <StackOverflowIcon />
        </SocialIconLink>
      </SocialsWrapper>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
        <GlowEffect $transparency={10}>
          <FlareCard $intensity={30} $borderRadius={'12px'}>
            <StatusWrapper>
              {codingStatus}
              {!isMobile && (
                <>
                  {workStatus}
                  {livingStatus}
                </>
              )}
            </StatusWrapper>
          </FlareCard>
        </GlowEffect>
        {isMobile && (
          <>
            <GlowEffect $transparency={10}>
              <FlareCard $intensity={30} $borderRadius={'12px'}>
                <StatusWrapper>{workStatus}</StatusWrapper>
              </FlareCard>
            </GlowEffect>
            <GlowEffect $transparency={10}>
              <FlareCard $intensity={30} $borderRadius={'12px'}>
                <StatusWrapper>{livingStatus}</StatusWrapper>
              </FlareCard>
            </GlowEffect>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
