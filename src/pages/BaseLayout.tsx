import '@fontsource/lato/100.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';
import '@fontsource/montserrat/100.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/900.css';
import { lazy, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import GithubIcon from '@assets/Icons/Github';
import LinkedInIcon from '@assets/Icons/LinkedIn';
import StackOverflowIcon from '@assets/Icons/StackOverflow';
import FloatingMenu from '@components/FloatingMenu/FloatingMenu';
import LoadableComponent from '@components/LoadableComponent';
import SocialIcon from '@components/SocialIcon';
import AppThemeProvider from '@theme/AppThemeProvider';
import GlobalStyles from '@theme/GlobalStyles';

const BaseLayoutBackground = LoadableComponent(
  lazy(() => import('@components/Background'))
);

const Container = styled.div({
  padding: '3px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const SocialsWrapper = styled.div(({ theme }) => ({
  justifySelf: 'end',
  display: 'flex',
  gap: '6px',
  marginTop: '-10px',
  marginBottom: '10px',
  [theme.breakpoints.max.mobile]: {
    justifySelf: 'start',
  },
}));

const InnerContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '99vh',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  paddingTop: '2rem',
  [theme.breakpoints.max.mobile]: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '1rem',
  },
}));

const OutletContainer = styled.div(({ theme }) => ({
  paddingLeft: 'clamp(0px, 4vw, 6rem)',
  paddingRight: 'clamp(0px, 4vw, 6rem)',
  flex: 1,
  [theme.breakpoints.max.mobile]: {
    paddingLeft: '0px',
    paddingRight: '0px',
  },
}));

const Trademark = styled.div(({ theme }) => ({
  alignSelf: 'center',
  justifySelf: 'end',
  fontSize: '12px',
  opacity: 0.3,
  [theme.breakpoints.max.mobile]: {
    justifySelf: 'start',
  },
}));

const BaseLayout = () => {
  const currentYear = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <AppThemeProvider>
      <GlobalStyles />
      <BaseLayoutBackground />
      <div id="bg-id-portal" />
      <Container>
        <InnerContainer>
          <FloatingMenu />
          <OutletContainer>
            <Outlet />
          </OutletContainer>
          <div style={{ paddingBottom: '1rem' }}>
            <SocialsWrapper>
              <SocialIcon
                url="https://github.com/RicardoMoraisPOR"
                ariaLabel="Ricardo Morais Github profile"
              >
                <GithubIcon />
              </SocialIcon>
              <SocialIcon
                url="https://www.linkedin.com/in/ricardo-dias-morais/"
                ariaLabel="Ricardo Morais LinkedIn profile"
              >
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon
                url="https://stackoverflow.com/users/8182493/ricardo-dias-morais"
                ariaLabel="Ricardo Morais StackOverflow profile"
              >
                <StackOverflowIcon />
              </SocialIcon>
            </SocialsWrapper>
            <Trademark>
              © {currentYear} Ricardo Morais | made in 🇵🇹 Portugal
            </Trademark>
          </div>
        </InnerContainer>
      </Container>
    </AppThemeProvider>
  );
};

export default BaseLayout;
