import styled, { useTheme } from 'styled-components';
import FlareCard from '../components/FlareCard';
import GlowEffect from '../components/GlowEffect';
import StackOverflowIcon from '../assets/StackOverflow';
import GithubIcon from '../assets/Github';
import LinkedInIcon from '../assets/LinkedIn';
import useMediaQuery from '../hooks/useMediaQuery';
import { ReactNode, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SocialIcon from '../components/SocialIcon';

const EmojiHello = styled('div')({
  display: 'inline-block',
});

const StatusWrapper = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-around',
    width: 'clamp(80px, 90vw, 960px)',
    padding: '16px',
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
      height: '80px',
    },
  };
});

const StatusTitle = styled('span')(({ theme }) => {
  return {
    color: theme.palette.text,
    fontWeight: 300,
    fontSize: '1rem',
    marginBottom: '15px',
  };
});

const StatusYears = styled('span')(({ theme }) => {
  return {
    color: theme.palette.primary,
    fontWeight: 800,
    fontSize: '2.5rem',
    [theme.breakpoints.max.mobile]: {
      fontSize: '1.8rem',
    },
  };
});

const StatusDescription = styled('span')(({ theme }) => {
  return {
    color: theme.palette.primary,
    fontWeight: 600,
    fontSize: '1.25rem',
    [theme.breakpoints.max.mobile]: {
      fontSize: '1rem',
    },
  };
});

const StatusDescriptionSmall = styled('span')(({ theme }) => {
  return {
    color: theme.palette.primary,
    fontWeight: 600,
    fontSize: '0.7rem',
    [theme.breakpoints.max.mobile]: {
      flexDirection: 'column',
      gap: 30,
    },
  };
});

const SocialsWrapper = styled('div')({
  display: 'flex',
  gap: '16px',
  justifyContent: 'center',
  padding: '16px',
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

const PositioningDiv = styled('div')(({ theme }) => {
  return {
    marginTop: '10vh',
    [theme.breakpoints.max.mobile]: {
      marginTop: '30px',
    },
  };
});

const Title = styled('h1')({
  margin: '30px 0px 16px 0px',
});

const HomePageWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const MobileStatusCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
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

  let cardInfo = (
    <GlowEffect $transparency={10}>
      <FlareCard $intensity={30} $borderRadius={'12px'}>
        <StatusWrapper>
          {codingStatus}
          {workStatus}
          {livingStatus}
        </StatusWrapper>
      </FlareCard>
    </GlowEffect>
  );

  if (isMobile) {
    cardInfo = (
      <MobileStatusCard>
        <GlowEffect $transparency={10}>
          <FlareCard $intensity={30} $borderRadius={'12px'}>
            <StatusWrapper>{codingStatus}</StatusWrapper>
          </FlareCard>
        </GlowEffect>
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
      </MobileStatusCard>
    );
  }
  return (
    <HomePageWrapper>
      <PositioningDiv>
        <Title>
          Hello <EmojiHello ref={emojiRef}>✌️</EmojiHello>, My name is Ricardo
          Morais.
        </Title>
      </PositioningDiv>
      <span>I’m a Frontend Developer</span>
      <PositioningDiv>
        <SocialsWrapper>
          <SocialIcon
            url="https://github.com/RicardoMoraisPOR"
            ariaLabel="Ricardo Morais Github profile"
          >
            <GithubIcon />
          </SocialIcon>
          <SocialIcon
            url="https://www.linkedin.com/in/ricardo-morais-aa3061205/"
            ariaLabel="Ricardo Morais LinkedIn profile"
          >
            <LinkedInIcon />
          </SocialIcon>
          <SocialIcon
            url="https://stackoverflow.com/users/8182493/ricardo-dias-morais"
            ariaLabel="Ricardo Morais StackOverflow profile"
          >
            <StackOverflowIcon />
          </SocialIcon>
        </SocialsWrapper>
        {cardInfo}
      </PositioningDiv>
    </HomePageWrapper>
  );
};

export default HomePage;
