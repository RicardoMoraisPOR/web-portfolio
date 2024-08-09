import { useLottie } from 'lottie-react';
import { useTheme } from 'styled-components';
import scrollAnimation from '../assets/scroll.json';
import cloneDeepWith from 'lodash/cloneDeepWith';
import isEqual from 'lodash/isEqual';
import cloneDeep from 'lodash/cloneDeep';
import { useMemo } from 'react';
import { hexToLottieRGBA } from '../theme/AppThemeUtils';

const ScrollAnimationComponent = () => {
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
      scrollAnimation,
      [0.6118, 0.6392, 0.6863],
      hexToLottieRGBA(theme.palette.accent)
    );
  }, [theme.palette.accent]);

  const { View: ScrollAnimation } = useLottie({
    id: 'scrollAnimationId',
    animationData: AnimationWithTheme,
    loop: true,
    autoplay: true,
    style: {
      width: '30px',
      height: '30px',
    },
  });

  return ScrollAnimation;
};

export default ScrollAnimationComponent;
