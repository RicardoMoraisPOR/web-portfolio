import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import FloatingMenu from '../components/FloatingMenu';
import AppThemeProvider from '../theme/AppThemeProvider';
import GlobalStyles from '../theme/GlobalStyles';
import '@fontsource/lato';
import '@fontsource/montserrat';
import { useLottie } from 'lottie-react';
import bubblesAnimation from '../assets/bubbles.json';
import ScrollableContent from '../components/ScrollableContent';

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

const OutletContainer = styled('div')({
  paddingLeft: 'clamp(0px, 4vw, 6rem)',
  paddingRight: 'clamp(0px, 4vw, 6rem)',
});

const BubblesContainer = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: '0.2',
});

const BaseLayout = () => {
  const { View } = useLottie({
    id: 'bubblesAnimationId',
    animationData: bubblesAnimation,
    loop: true,
    autoplay: true,
    style: {
      width: '100%',
      height: '100%',
    },
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });

  return (
    <AppThemeProvider>
      <GlobalStyles />
      <Container>
        <BubblesContainer>{View}</BubblesContainer>
        <ScrollableContent>
          <InnerContainer>
            <FloatingMenu />
            <OutletContainer>
              <Outlet />
            </OutletContainer>
          </InnerContainer>
        </ScrollableContent>
      </Container>
    </AppThemeProvider>
  );
};

export default BaseLayout;
