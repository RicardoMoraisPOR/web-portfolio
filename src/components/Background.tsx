import { useLottie } from 'lottie-react';
import styled from 'styled-components';
import bubblesAnimation from '../assets/bubbles.json';

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
  pointerEvents: 'none',
});

const Background = () => {
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
  return <BubblesContainer>{View}</BubblesContainer>;
};

export default Background;
