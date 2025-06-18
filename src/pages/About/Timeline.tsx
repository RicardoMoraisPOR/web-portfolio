import FlareCard from '@components/FlareCard/FlareCard';
import GlowEffect from '@components/GlowEffect/GlowEffect';
import ScrollableContent from '@components/ScrollableContent/ScrollableContent';
import { TIMELINE_LIST } from '@constants/timeline';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import {
  CompanyContainer,
  CompanyImage,
  CompanyInfoContainer,
  Container,
  TimelineAreaContainer,
  TimelineContainer,
  TimelineDate,
  TimelineDescription,
  TimelineItem,
  TimelineJobArea,
  TimelineLine,
  TimelineMarker,
  TimelineTitle,
  TimelineTool,
  TimelineToolDescription,
  TimelineToolInnerWrapper,
  TimelineToolWrapper,
} from './about.styles';

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useGSAP(() => {
    if (timelineRef.current) {
      const items = timelineRef.current.children;
      gsap.set(items, { opacity: 0 });
      gsap.fromTo(
        items,
        { opacity: 0, x: 200 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'expo.out',
          delay: 0.08,
        }
      );
    }
  }, []);

  return (
    <Container>
      <ScrollableContent parentHeight="fit-content" withFlexColumnContainer>
        <TimelineContainer ref={timelineRef}>
          {TIMELINE_LIST.map((item, index) => (
            <TimelineItem key={item.id}>
              <TimelineMarker />
              {index !== TIMELINE_LIST.length - 1 && <TimelineLine />}
              <CompanyContainer>
                {item.companyFavicon !== undefined && (
                  <CompanyImage
                    alt={`${item.companyName}-logo`}
                    src={item.companyFavicon}
                  />
                )}
                <CompanyInfoContainer>
                  <TimelineDescription>
                    {item.companyJob}
                    {item.companyLink !== undefined &&
                      item.companyName !== undefined && (
                        <>
                          {' '}
                          at{' '}
                          <b>
                            <Link to={item.companyLink} target="_blank">
                              {item.companyName}
                            </Link>
                          </b>
                        </>
                      )}
                  </TimelineDescription>
                  <TimelineDate>
                    {item.companyStart} - {item.companyEnd}
                  </TimelineDate>
                </CompanyInfoContainer>
              </CompanyContainer>
              {item.title && item.jobArea && (
                <TimelineAreaContainer>
                  <TimelineTitle>{item.title}</TimelineTitle>
                  <TimelineJobArea>{item.jobArea}</TimelineJobArea>
                </TimelineAreaContainer>
              )}
              {item.descriptionTexts?.map((description, id) => (
                <TimelineDescription key={`${item.id}-text-${id}`}>
                  {description}
                </TimelineDescription>
              ))}
              {item.mainTools !== undefined && item.mainTools.length > 0 && (
                <>
                  <br />
                  <TimelineToolWrapper>
                    {item.mainTools?.map(
                      ({ description, iconComponent: Icon, icon }, id) => (
                        <GlowEffect
                          key={`${item.companyName}-${description}-${id}`}
                          $transparency={20}
                        >
                          <FlareCard
                            $intensity={15}
                            $borderRadius={4}
                            $disableTouch
                          >
                            <TimelineToolInnerWrapper>
                              <TimelineTool>
                                {Icon ? (
                                  <Icon fill={theme.palette.primary} />
                                ) : (
                                  icon?.({
                                    fill: theme.palette.primary,
                                  })
                                )}
                                <TimelineToolDescription>
                                  {description}
                                </TimelineToolDescription>
                              </TimelineTool>
                            </TimelineToolInnerWrapper>
                          </FlareCard>
                        </GlowEffect>
                      )
                    )}
                  </TimelineToolWrapper>
                </>
              )}
            </TimelineItem>
          ))}
        </TimelineContainer>
      </ScrollableContent>
    </Container>
  );
};

export default Timeline;
