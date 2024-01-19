import styled from 'styled-components';
import FlareCard from '../components/FlareCard';
import GlowEffect, { GlowEffectStyle } from '../components/GlowEffect';
import StackOverflowIcon from '../assets/StackOverflow';
import GithubIcon from '../assets/Github';
import LinkedInIcon from '../assets/LinkedIn';

const EmojiHello = styled('div')({
  display: 'inline-block',
  animation: `waveAnimation 2100ms linear`,

  '@keyframes waveAnimation ': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '10%': {
      transform: 'rotate(0deg)',
    },
    '20%': {
      transform: 'rotate(-10deg) translate(-10px, 0px);',
    },
    '30%': {
      transform: 'rotate(20deg) translate(10px, -40px);',
    },
    '40%': {
      transform: 'rotate(-40deg) translate(10px, -40px);',
    },
    '60%': {
      transform: 'rotate(-40deg) translate(10px, -40px);',
    },
    '70%': {
      transform: 'rotate(0deg) translate(0px, 0px);',
    },
    '100%': {
      transform: 'rotate(0deg) translate(0px, 0px);',
    },
  },
});

const StatusWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  width: '50vw',
  padding: '1rem',
});

const StatusGroup = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
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
  };
});

const StatusDescription = styled('span')(({ theme }) => {
  return {
    color: theme.palette.primary,
    fontWeight: 500,
    fontSize: '20px',
  };
});

const StatusDescriptionSmall = styled('span')(({ theme }) => {
  return {
    color: theme.palette.primary,
    fontWeight: 500,
    fontSize: '12px',
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
      transition: 'opacity 300ms ease, fill 300ms ease',
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
});

const HomePage = () => {
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
      <h1>
        Hello <EmojiHello>✌️</EmojiHello>, My name is Ricardo Morais.
      </h1>
      <span>I’m a Frontend Developer</span>
      <SocialsWrapper>
        <SocialIconLink
          href="https://github.com/RicardoMoraisPOR"
          target="_blank"
          aria-label="Ricardo Morais Github link"
        >
          <GithubIcon />
        </SocialIconLink>
        <SocialIconLink
          href="https://www.linkedin.com/in/ricardo-morais-aa3061205/"
          target="_blank"
          aria-label="Ricardo Morais LinkedIn link"
        >
          <LinkedInIcon />
        </SocialIconLink>
        <SocialIconLink
          href="https://stackoverflow.com/users/8182493/ricardo-dias-morais"
          target="_blank"
          aria-label="Ricardo Morais StackOverflow link"
        >
          <StackOverflowIcon />
        </SocialIconLink>
      </SocialsWrapper>
      <GlowEffect $transparency={10}>
        <FlareCard $intensity={30} $borderRadius={'12px'}>
          <StatusWrapper>
            <StatusGroup>
              <StatusTitle>Coding For</StatusTitle>
              <StatusYears>8 Years</StatusYears>
            </StatusGroup>
            <StatusGroup>
              <StatusTitle>Work Status</StatusTitle>
              <StatusDescription>Currently @ Nextbitt</StatusDescription>
            </StatusGroup>
            <StatusGroup>
              <StatusTitle>Living In</StatusTitle>
              <StatusDescription>Madeira Island 🏝️</StatusDescription>
              <StatusDescriptionSmall>Portugal</StatusDescriptionSmall>
            </StatusGroup>
          </StatusWrapper>
        </FlareCard>
      </GlowEffect>
    </div>
  );
};

export default HomePage;
