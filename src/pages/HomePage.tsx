import styled from 'styled-components';
import FlareCard from '../components/FlareCard';
import GlowEffect from '../components/GlowEffect';

const EmojiHello = styled('div')({
  display: 'inline-block',
  animation: `waveAnimation 2100ms linear`,

  '@keyframes waveAnimation ': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '10%': {
      transform: 'rotate(0deg)',
    },
    '20%': {
      transform: 'rotate(-10deg) translate(-10px, 0px);',
    },
    '30%': {
      transform: 'rotate(20deg) translate(10px, -40px);',
    },
    '40%': {
      transform: 'rotate(-40deg) translate(10px, -40px);',
    },
    '60%': {
      transform: 'rotate(-40deg) translate(10px, -40px);',
    },
    '70%': {
      transform: 'rotate(0deg) translate(0px, 0px);',
    },
    '100%': {
      transform: 'rotate(0deg) translate(0px, 0px);',
    },
  },
});

const HomePage = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>
        Hello <EmojiHello>✌️</EmojiHello>, My name is Ricardo Morais.
      </h1>
      <span>I’m a Frontend Developer</span>
      <GlowEffect $transparency={20}>
        <FlareCard $intensity={30} $borderRadius={'12px'}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '50vw',
            }}
          >
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
        </FlareCard>
      </GlowEffect>
    </div>
  );
};

export default HomePage;
