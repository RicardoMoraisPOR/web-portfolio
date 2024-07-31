import { useLottie } from 'lottie-react';
import Animation404 from '../assets/404.json';
import styled from 'styled-components';

const AnimationContainer = styled('div')({
  height: 'calc(80vh)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const Page404 = () => {
  const { View } = useLottie({
    id: '404AnimationId',
    animationData: Animation404,
    loop: false,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    style: {
      height: '80%',
      width: '80%',
    },
  });

  return (
    <AnimationContainer>
      {View}
      <span>How did you end up here?</span>
    </AnimationContainer>
  );
};

export default Page404;
