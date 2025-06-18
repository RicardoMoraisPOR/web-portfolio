import MetaTag from '@components/MetaTag';
import { QUOTES_LIST } from '@constants/quotes';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HomePageWrapper,
  InlineDiv,
  IntroTextAbout,
  IntroTextBold,
  IntroTextWrapper,
  Main,
  PositioningDiv,
  SmallIntroTextAbout,
  Subtitle,
  Title,
} from './home.styles';
import SkillsSection from './SkillsSection';

const HomePage = () => {
  const emojiRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useGSAP(() => {
    gsap
      .timeline({
        paused: true,
      })
      .from(heroRef.current, {
        opacity: 0,
        y: 70,
        duration: 0.4,
      })
      .to(heroRef.current, {
        y: 0,
        opacity: 1,
      })
      .play();
  });

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 10,
        paused: true,
      })
      .to(emojiRef.current, {
        rotate: -10,
        x: -10,
        delay: 4,
        duration: 0.3,
      })
      .to(emojiRef.current, {
        rotate: 20,
        x: 10,
        y: -20,
        duration: 0.3,
      })
      .to(emojiRef.current, {
        rotate: -20,
        x: -20,
        y: -20,
        duration: 0.2,
        ease: 'power5.inOut',
      })
      .to(emojiRef.current, {
        rotate: 0,
        x: 0,
        y: 0,
        delay: 0.5,
        duration: 0.4,
        ease: 'powe1.out',
      })
      .play();
  });

  useGSAP(() => {
    setCurrentQuoteIndex(Math.floor(Math.random() * QUOTES_LIST.length));
    gsap
      .timeline({
        repeat: -1,
      })
      .to(subtitleRef.current, {
        opacity: 0,
        duration: 0.5,
        y: 15,
        onComplete: () => {
          setCurrentQuoteIndex(
            (prevIndex) => (prevIndex + 1) % QUOTES_LIST.length
          );
        },
      })
      .to(subtitleRef.current, {
        opacity: 0.5,
        duration: 0.5,
        y: 0,
      })
      .to(subtitleRef.current, {
        opacity: 0,
        duration: 0.5,
        y: 15,
        delay: 5,
      });
  });

  return (
    <Main>
      <MetaTag />
      <HomePageWrapper>
        <div ref={heroRef}>
          <PositioningDiv>
            <Title>Ricardo Morais</Title>
            <Subtitle ref={subtitleRef}>
              {QUOTES_LIST[currentQuoteIndex].quote} -{' '}
              {QUOTES_LIST[currentQuoteIndex].author}
            </Subtitle>
          </PositioningDiv>
          <PositioningDiv>
            <IntroTextWrapper>
              <IntroTextAbout>
                Hey <InlineDiv ref={emojiRef}>✌️</InlineDiv> I'm a{' '}
                <IntroTextBold>Front-end Engineer</IntroTextBold>, currently
                working at{' '}
                <IntroTextBold>
                  <Link to="https://www.santanderconsumer.com/" target="_blank">
                    Santander Auto Software
                  </Link>
                </IntroTextBold>
                {'. '} I work with forward-thinking people to design and build
                clean, interactive and accessible{' '}
                <IntroTextBold>websites and products</IntroTextBold>.
              </IntroTextAbout>
              <br />
              <br />
              <SmallIntroTextAbout>
                Here’s a quick look at my main tools:
              </SmallIntroTextAbout>
              <SkillsSection />
            </IntroTextWrapper>
          </PositioningDiv>
        </div>
      </HomePageWrapper>
    </Main>
  );
};

export default HomePage;
