import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import FloatingMenu from '../components/FloatingMenu';
import AppThemeProvider from '../theme/AppThemeProvider';
import GlobalStyles from '../theme/GlobalStyles';
import '@fontsource/lato';
import '@fontsource/montserrat';
import LoadableComponent from '../components/LoadableComponent';
import { lazy, useMemo } from 'react';
import { ToastProvider } from '../contexts/ToastContext';

const BaseLayoutBackground = LoadableComponent(
  lazy(() => import('../components/Background'))
);

const Container = styled('div')({
  padding: '3px',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

const InnerContainer = styled('div')(({ theme }) => ({
  flexGrow: 1,
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
  minHeight: 'calc(100% - 62px - 2rem)',
  [theme.breakpoints.max.mobile]: {
    paddingLeft: '0px',
    paddingRight: '0px',
  },
}));

const Trademark = styled('div')({
  alignSelf: 'center',
  justifySelf: 'end',
  fontSize: '12px',
  opacity: 0.3,
});

const BaseLayout = () => {
  const currentYear = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <AppThemeProvider>
      <GlobalStyles />
      <BaseLayoutBackground />
      <div id="bg-id-portal" />
      <ToastProvider>
        <Container>
          <InnerContainer>
            <FloatingMenu />
            <OutletContainer>
              <Outlet />
            </OutletContainer>
            <Trademark>© {currentYear} Ricardo Morais | made in 🇵🇹</Trademark>
          </InnerContainer>
        </Container>
      </ToastProvider>
    </AppThemeProvider>
  );
};

export default BaseLayout;
