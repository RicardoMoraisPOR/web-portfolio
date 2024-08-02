import styled from 'styled-components';
import { lazy, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import ShiverSpan from '../components/ShiverSpan';
import { useLottie } from 'lottie-react';
import scrollAnimation from '../assets/scroll.json';
import LoadableComponent from '../components/LoadableComponent';
import { useInView } from 'react-intersection-observer';

const SkillsSection = LoadableComponent(
  lazy(() => import('../components/SkillsSection'))
);
const ProjectsSection = LoadableComponent(
  lazy(() => import('../components/ProjectsSection'))
);

const InlineDiv = styled('div')({
  display: 'inline-block',
});

const ScrollAnimationInnerWrapper = styled('div')({
  opacity: 0,
});

const ScrollAnimationWrapper = styled('div')({
  height: '31px',
});

export const PositioningDiv = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

export const IntroTextWrapper = styled('div')(({ theme }) => ({
  width: '50vw',
  [theme.breakpoints.max.tablet]: {
    width: '100%',
  },
}));

export const IntroTextAbout = styled('span')(({ theme }) => {
  return {
    color: theme.palette.text,
  };
});

const IntroTextBold = styled(IntroTextAbout)({
  fontWeight: '800',
});

const HomePageWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  height: 'calc(100vh - 62px - 2rem)',
  minHeight: '500px',
});

const SectionPositioningDiv = styled(PositioningDiv)(({ theme }) => ({
  width: '100%',
  maxWidth: '2000px',
  height: 'fit-content',
  minHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.max.tablet]: {
    height: 'fit-content',
    minHeight: '400px',
    marginTop: '60px',
  },
}));

const HomePage = () => {
  const emojiRef = useRef<HTMLDivElement>(null);
  const scrollAnimationRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap
      .timeline({
        paused: true,
      })
      .from(scrollAnimationRef.current, {
        opacity: 0,
        duration: 2,
      })
      .to(scrollAnimationRef.current, {
        opacity: 0.5,
      })
      .play();
  });

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

  const { View: ScrollAnimation } = useLottie({
    id: 'scrollAnimationId',
    animationData: scrollAnimation,
    loop: true,
    autoplay: true,
    style: {
      width: '30px',
      height: '30px',
    },
  });

  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    delay: 0.4,
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    delay: 0.4,
  });

  return (
    <main>
      <HomePageWrapper>
        <div>
          <PositioningDiv>
            <Title>
              Hello <InlineDiv ref={emojiRef}>✌️</InlineDiv> my name is Ricardo
              Morais.
            </Title>
            <Subtitle>I’m a Front-end Developer</Subtitle>
          </PositioningDiv>
          <PositioningDiv>
            <IntroTextWrapper>
              <IntroTextAbout>
                Currently working as{' '}
                <IntroTextBold>Software Engineer</IntroTextBold> at{' '}
                <Link to="https://www.nextbitt.com/" target="_blank">
                  Nextbitt
                </Link>{' '}
                🍃 while enjoying the vibrant life on the stunning Madeira
                Island 🏝️. If you are interested, you can see more in the{' '}
                <Link to="/about">about</Link> page.
              </IntroTextAbout>
              <br />
              <br />
              <IntroTextAbout>
                I didn't want this to be just another generic portfolio website,
                so I've added some secrets that you can see{' '}
                <Link to="/about">here</Link>. to make exploring the site a bit
                more engaging, happy hunting! <ShiverSpan>🚀</ShiverSpan>
              </IntroTextAbout>
            </IntroTextWrapper>
          </PositioningDiv>
        </div>
        <PositioningDiv>
          <ScrollAnimationWrapper>
            {!skillsInView && (
              <ScrollAnimationInnerWrapper ref={scrollAnimationRef}>
                {ScrollAnimation}
              </ScrollAnimationInnerWrapper>
            )}
          </ScrollAnimationWrapper>
        </PositioningDiv>
      </HomePageWrapper>
      <SectionPositioningDiv ref={skillsRef}>
        {skillsInView && <SkillsSection />}
      </SectionPositioningDiv>
      <SectionPositioningDiv ref={projectsRef}>
        {projectsInView && <ProjectsSection />}
      </SectionPositioningDiv>
      <PositioningDiv />
    </main>
  );
};

export default HomePage;
