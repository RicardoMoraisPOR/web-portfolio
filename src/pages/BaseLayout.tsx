import { Outlet } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import FloatingMenu from '../components/FloatingMenu';
import AppThemeProvider from '../theme/AppThemeProvider';
import GlobalStyles from '../theme/GlobalStyles';
import '@fontsource/lato';
import '@fontsource/montserrat';
import LoadableComponent from '../components/LoadableComponent';
import { lazy, useMemo } from 'react';
import { useSecretContext } from '../hooks/useSecret';
import { Toaster } from 'sonner';

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

const SecretPin = styled('span')(({ theme }) => ({
  fontSize: '12px',
  color: theme.palette.background,
}));

const StyledToaster = styled(Toaster)(({ theme }) => ({
  fontSize: '12px',
  '& li': {
    background: theme.palette.primary,
    '& > div': {
      color: theme.palette.background,
    },
    '& > button': {
      background: 'red',
    },
  },
}));

const ToasterComponent = () => {
  const theme = useTheme();
  return (
    <StyledToaster
      duration={7000}
      expand={true}
      toastOptions={{
        actionButtonStyle: {
          background: theme.palette.secondary,
          color: theme.palette.text,
        },
      }}
    />
  );
};

const BaseLayout = () => {
  const { secrets } = useSecretContext();
  const currentYear = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <AppThemeProvider>
      <GlobalStyles />
      <BaseLayoutBackground />
      <div id="bg-id-portal" />
      <ToasterComponent />
      <Container>
        <InnerContainer>
          <FloatingMenu />
          <OutletContainer>
            <Outlet />
          </OutletContainer>
          <Trademark>
            © {currentYear} Ricardo Morais | made in 🇵🇹{' '}
            {!secrets.secretPin.hasFoundSecret && <SecretPin>P1N</SecretPin>}
          </Trademark>
        </InnerContainer>
      </Container>
    </AppThemeProvider>
  );
};

export default BaseLayout;
