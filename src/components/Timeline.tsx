import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SvgCertificationFile from '../assets/Icons/CertificationFile';
import SvgGraduation from '../assets/Icons/Graduation';
import SvgCareerRaise from '../assets/Icons/CareerRaise';
import SvgInterview from '../assets/Icons/Interview';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const Container = styled.div(({ theme }) => ({
  paddingLeft: '1rem',
  paddingRight: '1rem',
  [theme.breakpoints.min.tablet]: {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
}));

const FlexCenter = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '1rem',
});

const HeadingContainer = styled.div({
  gap: '0.5rem',
});

const Heading = styled.h1({
  fontWeight: 'bold',
});

const TimelineContainer = styled.div({
  position: 'relative',
  paddingLeft: '1.5rem',
  display: 'grid',
  gap: '2.5rem',
  '&::after': {
    content: '',
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    width: '1px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust color as needed
    pointerEvents: 'none', // To make sure it doesn't capture mouse events
  },
});

const TimelineItem = styled.div(({ theme }) => ({
  display: 'grid',
  gap: '0.25rem',
  fontSize: '0.875rem',
  position: 'relative',
  '& svg': {
    fill: theme.palette.primary,
    heigh: '16px',
    width: '16px',
    minHeight: '16px',
    minWidth: '16px',
  },
}));

const TimelineMarker = styled.div(({ theme }) => ({
  aspectRatio: '1 / 1',
  width: '0.75rem',
  backgroundColor: theme.palette.primary,
  borderRadius: '9999px',
  position: 'absolute',
  left: 0,
  transform: 'translateX(-29.5px)',
  zIndex: 10,
  top: '0.25rem',
}));

const TimelineLine = styled.div(({ theme }) => ({
  aspectRatio: '1 / 1',
  width: '2px',
  borderLeft: `1px dashed ${theme.palette.secondary}`,
  borderImageSlice: 1,
  height: 'calc(100% - 1.4rem)',
  position: 'absolute',
  left: 1,
  transform: 'translateX(-25px)',
  zIndex: 10,
  top: '1.4rem',
}));

const TimelineAchievement = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.max.mobile]: {
    marginBottom: '10px',
  },
}));

const TimelineTitle = styled.span(({ theme }) => ({
  fontFamily: theme.fonts.lato,
  fontWeight: '700',
  fontSize: '14px',
  [theme.breakpoints.max.mobile]: {
    marginBottom: '10px',
  },
}));

const TimelineDescription = styled.span({
  fontSize: '12px',
});

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (timelineRef.current && titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
          delay: 0.4,
        }
      );
      const items = timelineRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.5,
          ease: 'power2.out',
          delay: 1,
        }
      );
    }
  }, []);

  return (
    <Container>
      <FlexCenter>
        <HeadingContainer ref={titleRef}>
          <Heading>Career Highlights</Heading>
        </HeadingContainer>
      </FlexCenter>
      <TimelineContainer ref={timelineRef}>
        <TimelineItem>
          <TimelineMarker />
          <TimelineLine />
          <TimelineTitle>
            Mar 2024 - Present | Software Engineer at{' '}
            <Link to="https://www.nextbitt.com/" target="_blank">
              Nextbitt
            </Link>
          </TimelineTitle>
          <TimelineDescription>
            The place where I am currently working as a Software Engineer and
            enjoying the outstanding work culture that exceeded my expectations.
          </TimelineDescription>
          <TimelineDescription>
            I'm excited to contribute to projects that emphasize sustainability,
            a cause I am passionate about. This role enables me to combine my
            technical expertise and commitment to create a positive
            environmental impact.
          </TimelineDescription>
        </TimelineItem>
        <TimelineItem>
          <TimelineMarker />
          <TimelineLine />
          <TimelineTitle>
            Feb 2021 - Mar 2024 | Front-end Developer at{' '}
            <Link to="https://acin.pt/" target="_blank">
              ACIN Group
            </Link>
          </TimelineTitle>
          <TimelineDescription>
            During my time at ACIN Group, I experienced remarkable and
            exponential professional growth. I began as a Junior Front-end
            Developer working on the company's internal UI Library and quickly
            moved to the{' '}
            <Link to="https://globaltrustedsign.com/" target="_blank">
              GTS
            </Link>{' '}
            Software team, where I spent the majority of my time before
            advancing to a Senior role, where I joined the{' '}
            <Link to="https://imed.pt/imed/home" target="_blank">
              iMED
            </Link>{' '}
            software team as a PM redundancy and Front-end Team Leader.
          </TimelineDescription>
          <TimelineDescription>
            I played a key role in candidate interviews, starting by assisting
            Senior Developers and eventually conducting the interviews myself.
            Additionally, I helped integrate new candidates and had a
            significant influence on the company's technology decisions.
          </TimelineDescription>
          <TimelineDescription>
            I deeply appreciate Sofia for all the opportunities she provided.
          </TimelineDescription>
          <br />
          <TimelineAchievement>
            <SvgCareerRaise />
            <TimelineDescription>
              2023 - Promoted to second-in-command of the IMED team and Team
              Leader of the Front-end
            </TimelineDescription>
          </TimelineAchievement>
          <TimelineAchievement>
            <SvgCareerRaise />
            <TimelineDescription>
              2023 - Promoted to Maintainer of the Internal UI Library.
            </TimelineDescription>
          </TimelineAchievement>
          <TimelineAchievement>
            <SvgInterview />
            <TimelineDescription>
              2023 - Responsible for independently conducting candidate
              interviews as a Senior Developer.
            </TimelineDescription>
          </TimelineAchievement>
          <TimelineAchievement>
            <SvgCareerRaise />
            <TimelineDescription>
              2023 - Promoted from Mid to Senior Front-end Developer
            </TimelineDescription>
          </TimelineAchievement>
          <TimelineAchievement>
            <SvgInterview />
            <TimelineDescription>
              2022 - Responsible for assisting a Senior Developer in
              interviewing new candidates.
            </TimelineDescription>
          </TimelineAchievement>
          <TimelineAchievement>
            <SvgCareerRaise />
            <TimelineDescription>
              2022 - Promoted from Junior to Mid Front-end Developer
            </TimelineDescription>
          </TimelineAchievement>
        </TimelineItem>
        <TimelineItem>
          <TimelineMarker />
          <TimelineLine />
          <TimelineTitle>
            Sep 2018 - Oct 2020 | Software Developer at{' '}
            <Link to="https://www.wig.pt/" target="_blank">
              WIG - Work is Good
            </Link>
          </TimelineTitle>
          <TimelineDescription>
            At WIG, I worked as a Software Developer specializing in web and
            mobile development using the Microsoft ecosystem (Xamarin, ASP.Net
            Core, Blazor, and Umbraco). I initially joined as an intern and
            subsequently secured a contract as a junior developer.
          </TimelineDescription>
          <TimelineDescription>
            Faced many challenges and not always performing at my best. This
            experience taught me valuable lessons, and I'm grateful to João for
            his support and patience.
          </TimelineDescription>
          <br />
          <TimelineAchievement>
            <SvgCareerRaise />
            <TimelineDescription>
              2019 - Promoted from Intern to Junior Developer
            </TimelineDescription>
          </TimelineAchievement>
        </TimelineItem>
        <TimelineItem>
          <TimelineMarker />
          <TimelineLine />
          <TimelineTitle>
            Sep 2015 - Jun 2018 | CTE in Computer Systems Management and
            Programming Technician
          </TimelineTitle>
          <TimelineDescription>
            During this 3 years period, I completed a comprehensive technical
            education program at{' '}
            <Link to="https://www.sefo.pt/" target="_blank">
              ESCO
            </Link>{' '}
            in Torres Vedras.
          </TimelineDescription>
          <TimelineDescription>
            This provided me with a solid foundation in various aspects of
            system management, software development and technical
            troubleshooting.
          </TimelineDescription>
          <br />
          <TimelineAchievement>
            <SvgGraduation />
            <TimelineDescription>CTE Graduation</TimelineDescription>
          </TimelineAchievement>
          <TimelineAchievement>
            <SvgCertificationFile />
            <TimelineDescription>
              Cisco Networking Academy® - CCNA1 Routing and Switching
            </TimelineDescription>
          </TimelineAchievement>
          <TimelineAchievement>
            <SvgCertificationFile />
            <TimelineDescription>
              Letter of Recommendation by Chuck Robbins, CEO at Cisco Systems.
            </TimelineDescription>
          </TimelineAchievement>
        </TimelineItem>
      </TimelineContainer>
    </Container>
  );
};

export default Timeline;
