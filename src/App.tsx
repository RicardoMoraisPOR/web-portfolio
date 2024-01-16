import styled from 'styled-components';
import GlowingCard from './components/GlowingCard';
import FloatingMenu from './components/FloatingMenu';
import AppThemeProvider from './theme/AppThemeProvider';
// Supports weights 300-700
import '@fontsource-variable/quicksand';
// Supports weights 100-900
import '@fontsource-variable/montserrat';
import GlobalStyles from './theme/GlobalStyles';
import Logo from './components/Logo';

const Container = styled('div')({
  padding: '2rem',
  width: '100vw',
  height: '100vh',
});

const StatusCardWrapper = styled('div')({
  width: '80%',
  height: '150px',
  borderRadius: '12px',
});

function App() {
  return (
    <AppThemeProvider>
      <GlobalStyles />
      <Container>
        <Logo />
        <FloatingMenu />
        <h1>
          Hello <span>✌️</span>, My name is Ricardo Morais.
        </h1>
        <span>I’m a Frontend Developer</span>
        <StatusCardWrapper>
          <GlowingCard intensity={30}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <span>Work Experience</span>
                <span>5 Years</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <span>Work Status</span>
                <span>Currently @ Nextbitt</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <span>Living In</span>
                <span>Madeira Island</span>
                <span>Portugal</span>
              </div>
            </div>
          </GlowingCard>
        </StatusCardWrapper>
      </Container>
    </AppThemeProvider>
  );
}

export default App;
