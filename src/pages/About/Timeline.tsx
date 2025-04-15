import ScrollableContent from '@components/ScrollableContent/ScrollableContent';
import { TIMELINE_LIST } from '@constants/timeline';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  CompanyContainer,
  CompanyImage,
  CompanyInfoContainer,
  Container,
  TimelineAchievement,
  TimelineAchievementDescription,
  TimelineContainer,
  TimelineDate,
  TimelineDescription,
  TimelineItem,
  TimelineLine,
  TimelineMarker,
} from './about.styles';

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

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
                  <CompanyImage src={item.companyFavicon} />
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
              {item.descriptionTexts?.map((description, id) => (
                <TimelineDescription key={`${item.id}-text-${id}`}>
                  {description}
                </TimelineDescription>
              ))}
              {item.achievementsTexts !== undefined &&
                item.achievementsTexts.length > 0 && <br />}
              {item.achievementsTexts?.map((achievement, id) => (
                <TimelineAchievement key={`${item.id}-text-${id}`}>
                  {achievement.iconComponent}
                  <TimelineAchievementDescription>
                    {achievement.year} - {achievement.description}
                  </TimelineAchievementDescription>
                </TimelineAchievement>
              ))}
            </TimelineItem>
          ))}
        </TimelineContainer>
      </ScrollableContent>
    </Container>
  );
};

export default Timeline;
