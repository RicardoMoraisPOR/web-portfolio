import ImageMyself from '@assets/me.webp';
import MetaTag from '@components/MetaTag';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useCallback, useRef } from 'react';
import {
  AboutPageWrapper,
  BioSide,
  DescriptionText,
  ExperienceSide,
  FlexCenter,
  HeadingContainer,
  Image,
  ImageWrapper,
} from './about.styles';
import Timeline from './Timeline';

const AboutPage = () => {
  const bioRef = useRef<HTMLDivElement>(null);
  const bioImageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const getYearsDiference = useCallback((dateFrom: Date) => {
    const today = new Date();
    let diference = today.getFullYear() - dateFrom.getFullYear();
    const monthDifference = today.getMonth() - dateFrom.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < dateFrom.getDate())
    ) {
      diference--;
    }

    return diference;
  }, []);

  useGSAP(() => {
    if (bioImageRef.current) {
      gsap.fromTo(
        bioImageRef.current,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'sine.out',
        }
      );
    }
  }, []);

  useGSAP(() => {
    if (bioRef.current) {
      gsap.fromTo(
        bioRef.current,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  useGSAP(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  return (
    <AboutPageWrapper>
      <MetaTag />
      <BioSide ref={bioRef}>
        <ImageWrapper>
          <Image
            ref={bioImageRef}
            src={ImageMyself}
            alt="Ricardo Morais Dev Face Image"
          />
        </ImageWrapper>
        <br />
        <DescriptionText>
          I'm Ricardo Morais, a {getYearsDiference(new Date(1996, 0, 18))}
          -year-old Front-end developer originally from Lisbon, now living in
          Madeira Island.
        </DescriptionText>
        <DescriptionText>
          I began my coding career in 2015 when endorsed a 3-year CTE in
          Computer Systems Management and Programming in Torres Vedras/Lisbon.
        </DescriptionText>
        <DescriptionText>
          Now, With {getYearsDiference(new Date(2018, 6, 1))} years of
          professional experience, I've worked in both mobile and web
          development, contributing to projects for large companies nationally
          and internationally
        </DescriptionText>
        <DescriptionText>
          I focus on delivering results quickly without breaking anything,
          building a strong foundation that stands the test of time.
        </DescriptionText>
        <DescriptionText>
          I'm a React and Typescript specialist.
        </DescriptionText>
      </BioSide>
      <ExperienceSide>
        <div ref={titleRef}>
          <FlexCenter>
            <HeadingContainer>
              <h1>Career Highlights</h1>
            </HeadingContainer>
          </FlexCenter>
          <Timeline />
        </div>
      </ExperienceSide>
    </AboutPageWrapper>
  );
};

export default AboutPage;
