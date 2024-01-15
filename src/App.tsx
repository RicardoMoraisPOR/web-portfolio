import styled, { createGlobalStyle } from 'styled-components';
import GlowingCard from './components/GlowingCard';
import themeAnimation from './assets/themeLottie.json';
import { useCallback, useMemo, useRef, useState } from 'react';
import Lottie, {
  LottieRefCurrentProps,
  LottieComponentProps,
} from 'lottie-react';

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
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const segments = useMemo<LottieComponentProps['initialSegment']>(() => {
    return isDarkTheme ? [66, 153] : [0, 66];
  }, []);

  const onThemeChange = useCallback(() => {
    setIsDarkTheme(!isDarkTheme);
    lottieRef.current?.setDirection(isDarkTheme ? -1 : 1);
    lottieRef.current?.play();
  }, [isDarkTheme]);

  return (
    <>
      <GlobalStyles />
      <Container>
        <button onClick={onThemeChange}>Oi</button>
        <Lottie
          autoplay={false}
          loop={false}
          onEnterFrame={(e) => {
            console.log(e);
          }}
          initialSegment={segments}
          lottieRef={lottieRef}
          animationData={themeAnimation}
          style={{ height: '300px', width: '300px' }}
        />
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
    </>
  );
}

export default App;
