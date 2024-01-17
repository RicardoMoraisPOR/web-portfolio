import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import FloatingMenu from '../components/FloatingMenu';
import AppThemeProvider from '../theme/AppThemeProvider';
import GlobalStyles from '../theme/GlobalStyles';
// Supports weights 300-700
import '@fontsource-variable/quicksand';
// Supports weights 100-900
import '@fontsource-variable/montserrat';

const Container = styled('div')({
  padding: '2rem',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
});

const BaseLayout = () => {
  return (
    <AppThemeProvider>
      <GlobalStyles />
      <Container>
        <FloatingMenu />
        <Outlet />
      </Container>
    </AppThemeProvider>
  );
};

export default BaseLayout;
