import { alphaHexConverter } from '@theme/appThemeUtils';
import styled from 'styled-components';

export const Container = styled.div(({ theme }) => ({
  display: 'flex',
  maxHeight: '55vh',
  borderRadius: '5px',
  padding: '10px 0px',
  background: alphaHexConverter(theme.palette.secondary, 20),
  [theme.breakpoints.max.desktop]: {
    maxHeight: 'initial',
  },
}));

export const TimelineContainer = styled.div(({ theme }) => ({
  position: 'relative',
  padding: '0rem 0rem 0rem 2rem',
  display: 'grid',
  gap: '1.5rem',
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
  [theme.breakpoints.max.desktop]: {
    padding: '0rem 0rem 0rem 1.5rem',
  },
}));

export const TimelineItem = styled.div(({ theme }) => ({
  display: 'grid',
  gap: '0.25rem',
  width: '100%',
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

export const TimelineMarker = styled.div(({ theme }) => ({
  aspectRatio: '1 / 1',
  width: '0.75rem',
  backgroundColor: theme.palette.primary,
  borderRadius: '9999px',
  position: 'absolute',
  left: 0,
  transform: 'translateX(-29.5px)',
  zIndex: 10,
  top: '1.5rem',
}));

export const TimelineLine = styled.div(({ theme }) => ({
  aspectRatio: '1 / 1',
  width: '2px',
  borderLeft: `1px dashed ${theme.palette.secondary}`,
  borderImageSlice: 1,
  height: 'calc(100% - 0.4rem)',
  position: 'absolute',
  left: 1,
  transform: 'translateX(-25px)',
  zIndex: 10,
  top: '2.9rem',
}));

export const TimelineAchievement = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.max.mobile]: {
    marginBottom: '10px',
  },
}));

export const TimelineDescription = styled.span({
  fontSize: 'clamp(1rem, 0.8vw, 1.6rem)',
});

export const TimelineAchievementDescription = styled.span({
  fontSize: 'clamp(0.8rem, 0.8vw, 1.2rem)',
});

export const TimelineDate = styled.span({
  fontSize: 'clamp(0.6rem, 0.6vw, 1rem)',
});

export const CompanyImage = styled.img({
  marginTop: '4px',
  height: 'clamp(30px, 2vw, 60px)',
  width: 'clamp(30px, 2vw, 60px)',
});

export const CompanyContainer = styled.div({
  display: 'flex',
  gap: '10px',
  alignItems: 'start',
  padding: '10px 0px',
});

export const CompanyInfoContainer = styled.div({
  minHeight: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const ImageWrapper = styled.div({
  borderRadius: '50%',
  width: 'clamp(200px, 11vw, 300px)',
  height: 'clamp(200px, 11vw, 300px)',
  overflow: 'hidden', // Ensures the image is clipped to the parent border
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Image = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Ensures the image covers the entire area
});

export const AboutPageWrapper = styled.div(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  padding: '40px 0px',
  gap: '100px',
  [theme.breakpoints.max.desktop]: {
    gap: '50px',
    flexDirection: 'column',
  },
}));

export const DescriptionText = styled.span({
  alignSelf: 'start',
  justifySelf: 'start',
});

export const BioSide = styled.section({
  flex: 1,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
});

export const ExperienceSide = styled.section(({ theme }) => ({
  flex: 1,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  minHeight: '150px',
  [theme.breakpoints.max.desktop]: {
    flex: 'unset',
  },
}));

export const FlexCenter = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '1rem',
});

export const HeadingContainer = styled.div({
  gap: '0.5rem',
});

export const Heading = styled.h1({
  fontWeight: 'bold',
});
