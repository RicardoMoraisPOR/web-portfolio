import cloneDeep from 'lodash/cloneDeep';
import cloneDeepWith from 'lodash/cloneDeepWith';
import isEqual from 'lodash/isEqual';
import { useLottie } from 'lottie-react';
import { useMemo } from 'react';
import styled, { useTheme } from 'styled-components';
import Animation404 from '@assets/lottie/404.json';
import MetaTag from '@components/MetaTag';
import { hexToLottieRGBA } from '@theme/themeUtils';

const AnimationContainer = styled.div(({ theme }) => ({
  height: 'calc(80vh)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '& div': {
    [theme.breakpoints.max.mobile]: {
      width: '100% !important',
      height: '60% !important',
    },
  },
}));

const Page404 = () => {
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
      Animation404,
      [0.6118, 0.6392, 0.6863],
      hexToLottieRGBA(theme.palette.accent)
    );
  }, [theme.palette.accent]);

  const { View } = useLottie({
    id: '404AnimationId',
    className: '404-animation-class',
    animationData: AnimationWithTheme,
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
      <MetaTag />
      {View}
      <span>How did you end up here?</span>
    </AnimationContainer>
  );
};

export default Page404;
