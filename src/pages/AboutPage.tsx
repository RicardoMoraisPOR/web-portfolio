import styled from 'styled-components';
import ImageMyself from '../assets/me.webp';
import FlareCard from '../components/FlareCard';
import GlowEffect from '../components/GlowEffect';
import { useCallback, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Timeline from '../components/Timeline';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ImageWrapper = styled('div')({
  borderRadius: '100px',
  width: '200px',
  height: '200px',
  overflow: 'hidden', // Ensures the image is clipped to the parent border
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Ensures the image covers the entire area
});

const AboutPageWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  padding: '40px 0px',
  gap: '30px',
  [theme.breakpoints.max.desktop]: {
    flexDirection: 'column',
  },
}));

const Title = styled('span')(({ theme }) => ({
  fontFamily: theme.fonts.lato,
  fontSize: '20px',
}));

const DescriptionText = styled('span')({
  fontSize: '14px',
  alignSelf: 'start',
  justifySelf: 'start',
});

const BioSide = styled('section')({
  flexGrow: 1,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
});

const ExperienceSide = styled('section')({
  flexGrow: 3,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  minHeight: '150px',
});

const AboutPage = () => {
  const bioRef = useRef<HTMLDivElement>(null);
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

  const { ref: experienceSideRef, inView: timelineInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    delay: 0.4,
  });

  return (
    <AboutPageWrapper>
      <BioSide ref={bioRef}>
        <GlowEffect $transparency={10}>
          <FlareCard $intensity={70} $borderRadius={100}>
            <ImageWrapper>
              <Image src={ImageMyself} alt="Ricardo Morais Dev Face Image" />
            </ImageWrapper>
          </FlareCard>
        </GlowEffect>
        <Title>Ricardo Morais</Title>
        <DescriptionText>
          Hello! ✌️ I'm a {getYearsDiference(new Date(1996, 0, 18))} years old
          Front-end developer from Lisbon, living in Madeira Island.
        </DescriptionText>
        <DescriptionText>
          I started my coding career when I endorsed my 3 years CTE in Computer
          Systems Management and Programming Technician, in Torres Vedras,
          Lisbon back in 2015.
        </DescriptionText>
        <DescriptionText>
          Now, I have accumulated {getYearsDiference(new Date(2018, 6, 1))}{' '}
          years of professional experience, working in both mobile and web
          development. Since the beginning of my career, I have always been
          involved in projects for large companies, both nationally and
          internationally.
        </DescriptionText>
        <DescriptionText>
          When I work, I focus on getting things done fast, without breaking
          anything. I'm always committed into establishing a robust foundation
          that endures over time, recognizing the essential balance between
          swift delivery and the lasting advantages of well-structured and
          thoroughly documented code.
        </DescriptionText>
        <DescriptionText>
          I'm a React and Typescript specialist and I'm currently working as a
          Software Engineer.
        </DescriptionText>
      </BioSide>
      <ExperienceSide ref={experienceSideRef}>
        {timelineInView && <Timeline />}
      </ExperienceSide>
    </AboutPageWrapper>
  );
};

export default AboutPage;
