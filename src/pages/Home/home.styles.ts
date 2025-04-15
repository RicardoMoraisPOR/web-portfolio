import styled from 'styled-components';

export const InlineDiv = styled.div({
  display: 'inline-block',
});
export const Main = styled.main({
  height: '100%',
});

export const PositioningDiv = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Title = styled.h1({
  margin: '40px 0px 0px 0px',
  fontSize: 'clamp(2.5rem, 5vw, 5rem)',
});

export const Subtitle = styled.span(({ theme }) => ({
  marginTop: '10px',
  textAlign: 'center',
  color: theme.palette.accent,
  opacity: '0',
  fontSize: 'clamp(0.2rem, 3vw, 1rem)',
  [theme.breakpoints.max.desktop]: {
    minHeight: '80px',
  },
}));

export const IntroTextWrapper = styled.div(({ theme }) => ({
  width: '65vw',
  marginTop: '2rem',
  [theme.breakpoints.max.desktop]: {
    marginTop: '0px',
  },
  [theme.breakpoints.max.tablet]: {
    width: '100%',
  },
}));

export const IntroTextAbout = styled.span(({ theme }) => {
  return {
    color: theme.palette.text,
    fontSize: 'clamp(1rem, 3vw, 1.8rem)',
  };
});
export const SmallIntroTextAbout = styled(IntroTextAbout)({
  fontSize: 'clamp(0.5rem, 3vw, 1.2rem)',
});

export const IntroTextBold = styled(IntroTextAbout)({
  fontWeight: '800',
});

export const HomePageWrapper = styled.div(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  [theme.breakpoints.max.tablet]: {
    justifyContent: 'start',
  },
}));

export const SkillsWrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  width: '100%',
  justifyContent: 'start',
  alignItems: 'center',
  marginTop: '20px',
});

export const SkillWrapper = styled.div({
  height: '36px',
  '& div': {
    width: '100%',
    height: '100%',
    maxWidth: '70vw',
  },
});

export const SkillInnerWrapper = styled.div(({ theme }) => ({
  height: '100px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  textAlign: 'center',
  padding: '0px 12px',
  gap: '6px',
  [theme.breakpoints.max.tablet]: {
    fontSize: '0.8rem',
  },
}));
