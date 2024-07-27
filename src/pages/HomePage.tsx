import styled from 'styled-components';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import ShiverSpan from '../components/ShiverSpan';

const InlineDiv = styled('div')({
  display: 'inline-block',
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

const Subtitle = styled('span')(({ theme }) => {
  return {
    color: theme.palette.primary,
  };
});

const IntroTextWrapper = styled('div')({
  width: '50vw',
});

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
      <Subtitle>I’m a Fronten Developer</Subtitle>
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
            hunting! <ShiverSpan>🚀</ShiverSpan>. You can see more about me
            here.
          </IntroTextAbout>
        </IntroTextWrapper>
      </PositioningDiv>
    </HomePageWrapper>
  );
};

export default HomePage;
