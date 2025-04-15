import bubblesAnimation from '@assets/lottie/bubbles.json';
import { hexToLottieRGBA } from '@theme/themeUtils';
import cloneDeep from 'lodash/cloneDeep';
import cloneDeepWith from 'lodash/cloneDeepWith';
import isEqual from 'lodash/isEqual';
import { useLottie } from 'lottie-react';
import { useMemo } from 'react';
import styled, { useTheme } from 'styled-components';

const BubblesContainer = styled.div({
  position: 'fixed',
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
  const theme = useTheme();
  const deepRGBAReplace = (
    obj: Record<string, unknown>,
    target: Array<number>,
    replacement: Array<number>
  ) => {
    return cloneDeepWith(obj, (value) => {
      if (isEqual(value, target)) {
        return cloneDeep(replacement);
      }
    });
  };

  const AnimationWithTheme = useMemo(() => {
    return deepRGBAReplace(
      bubblesAnimation,
      [0.6118, 0.6392, 0.6863],
      hexToLottieRGBA(theme.palette.accent)
    );
  }, [theme.palette.accent]);

  const { View } = useLottie({
    id: 'bubblesAnimationId',
    animationData: AnimationWithTheme,
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
