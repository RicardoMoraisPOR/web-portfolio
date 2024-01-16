import styled, { createGlobalStyle } from 'styled-components';
import GlowingCard from './components/GlowingCard';
import FloatingMenu from './components/FloatingMenu';
import AppTheme from './theme/AppTheme';

const Container = styled('div')({
  width: '100vw',
  height: '100vh',
});

const StatusCardWrapper = styled('div')({
  width: '80%',
  height: '150px',
  borderRadius: '12px',
});

const GlobalStyles = createGlobalStyle({
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
  html: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    boxSizing: 'border-box',
    WebkitTextSizeAdjust: '100%',
  },

  body: {
    margin: 0,
    backgroundColor: '#071319',
  },
});

function App() {
  return (
    <AppTheme>
      <GlobalStyles />
      <FloatingMenu />
      <Container>
        <h1>Hello ✌️, My name is Ricardo Morais.</h1>
        <span>I’m a Frontend Developer</span>
        <StatusCardWrapper>
          <GlowingCard>
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
    </AppTheme>
  );
}

export default App;
