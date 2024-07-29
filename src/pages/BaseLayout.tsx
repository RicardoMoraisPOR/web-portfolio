import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import FloatingMenu from '../components/FloatingMenu';
import AppThemeProvider from '../theme/AppThemeProvider';
import GlobalStyles from '../theme/GlobalStyles';
import '@fontsource/lato';
import '@fontsource/montserrat';
import LoadableComponent from '../components/LoadableComponent';
import { lazy } from 'react';

const BaseLayoutBackground = LoadableComponent(
  lazy(() => import('../components/Background'))
);

const Container = styled('div')({
  padding: '3px',
  height: '100vh',
});

const InnerContainer = styled('div')(({ theme }) => ({
  paddingLeft: 'clamp(2rem, 4vw + 2rem, 6rem)',
  paddingRight: 'clamp(2rem, 4vw + 2rem, 6rem)',
  paddingTop: '2rem',
  paddingBottom: '2rem',
  [theme.breakpoints.max.mobile]: {
    paddingLeft: 'clamp(2rem, 3vw, 3rem)',
    paddingRight: 'clamp(2rem, 3vw, 3rem)',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
}));

const OutletContainer = styled('div')(({ theme }) => ({
  paddingLeft: 'clamp(0px, 4vw, 6rem)',
  paddingRight: 'clamp(0px, 4vw, 6rem)',
  [theme.breakpoints.max.mobile]: {
    paddingLeft: '0px',
    paddingRight: '0px',
  },
}));

const BaseLayout = () => {
  return (
    <AppThemeProvider>
      <GlobalStyles />
      <BaseLayoutBackground />
      <Container id="wrapper">
        <InnerContainer>
          <FloatingMenu />
          <OutletContainer>
            <Outlet />
          </OutletContainer>
        </InnerContainer>
      </Container>
    </AppThemeProvider>
  );
};

export default BaseLayout;
