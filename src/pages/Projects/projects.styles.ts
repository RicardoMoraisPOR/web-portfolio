import { alphaHexConverter } from '@theme/themeUtils';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProjectsPageWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '80px 0px',
  gap: '30px',
  [theme.breakpoints.max.tablet]: {
    padding: '40px 0px',
  },
}));

export const PositioningDiv = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const ProjectsWrapper = styled(PositioningDiv)(({ theme }) => ({
  transition: `gap ${theme.transitions.fast}ms ease`,
  display: 'grid',
  maxWidth: '100vw',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px',
  width: '100%',
  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'center',
  [theme.breakpoints.max.desktop]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
  },
  [theme.breakpoints.max.tablet]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

export const ProjectWrapper = styled.div(({ theme }) => ({
  width: '100%',
  borderRadius: '5px',
  height: '100%',
  minHeight: '200px',
  transition: `transform ${theme.transitions.fast}ms ease`,

  '& div': {
    width: '100%',
    maxWidth: '70vw',
    [theme.breakpoints.max.tablet]: {
      maxWidth: '100%',
    },
  },
}));

export const ProjectLayout = styled.div(({ theme }) => ({
  display: 'flex',
  height: '200px',
  [theme.breakpoints.max.desktop]: {
    height: '300px',
    flexDirection: 'column',
  },
  [theme.breakpoints.max.tablet]: {
    height: '200px',
    flexDirection: 'row',
  },
  [theme.breakpoints.max.mobile]: {
    height: '300px',
    flexDirection: 'column',
  },
}));

export const ProjectInnerWrapper = styled.div(({ theme }) => ({
  background: alphaHexConverter(theme.palette.accent, 20),
  width: '100%',
  height: '100%',
  display: 'flex',
  padding: '10px',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

export const ProjectImageWrapper = styled.div(({ theme }) => ({
  marginBottom: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  minWidth: '160px',
  [theme.breakpoints.max.desktop]: {
    minHeight: '130px',
  },
}));

export const ProjectContentWrapper = styled.div({
  padding: '0rem 5px',
  display: 'flex',
  flexDirection: 'column',
});

export const ProjectTitle = styled(Link)(({ theme }) => ({
  fontFamily: theme.fonts.lato,
  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
  lineHeight: 1.2,
}));

export const ProjectDescription = styled.span({
  fontSize: 'clamp(0.8rem, 0.6vw, 1rem)',
  margin: '10px 0px',
});

export const ProjectSkills = styled.div(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'end',
  gap: '10px',
  [theme.breakpoints.max.tablet]: {
    gap: '5px',
  },
  '& svg': {
    opacity: '40%',
    transition: `opacity ${theme.transitions.fast}ms ease`,
    '&:hover': {
      opacity: '100%',
    },
  },
}));
