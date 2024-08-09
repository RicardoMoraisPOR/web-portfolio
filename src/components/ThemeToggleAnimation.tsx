import { useRef, memo, useEffect, useState, useMemo } from 'react';
import themeAnimation from '../assets/themeLottie.json';
import { useLottie } from 'lottie-react';
import useAppThemeContext from '../hooks/useAppThemeContext';
import { hexToLottieRGBA } from '../theme/AppThemeUtils';
import { useTheme } from 'styled-components';

import cloneDeepWith from 'lodash/cloneDeepWith';
import isEqual from 'lodash/isEqual';
import cloneDeep from 'lodash/cloneDeep';

type AnimationDirection = 1 | -1;

const ThemeToggleAnimation = memo(() => {
  const { isDarkTheme } = useAppThemeContext();
  const theme = useTheme();

  // #region Lottie Animation Values
  const LIGHT_THEME_FRAME = 0;
  const DARK_THEME_FRAME = 90;

  const initialAnimationRenderStatus = useRef(false);
  const [showAnimation, setShowAnimation] = useState(false);
  // #endregion

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
      themeAnimation,
      [1, 0.819607853889, 0.372549027205, 1],
      hexToLottieRGBA(theme.palette.accent)
    );
  }, [theme.palette.accent]);

  const {
    View,
    play,
    setDirection,
    animationLoaded,
    animationItem,
    goToAndPlay,
    setSpeed,
  } = useLottie(
    {
      id: 'themeAnimationId',
      animationData: AnimationWithTheme,
      loop: false,
      autoplay: false,
      initialSegment: [LIGHT_THEME_FRAME, DARK_THEME_FRAME],
      rendererSettings: {
        viewBoxSize: '175 175 250 250',
      },
    },
    {
      height: 'inherit',
      width: 'inherit',
      transition: `opacity ${theme.transitions.fast}ms`,
      opacity: showAnimation ? 1 : 0,
    }
  );

  // start revealing animation
  useEffect(() => {
    setShowAnimation(true);
  }, []);

  // Lottie play and toggle animation direction
  useEffect(() => {
    if (initialAnimationRenderStatus.current && animationItem) {
      setDirection((animationItem?.playDirection * -1) as AnimationDirection);
      if (animationItem.isPaused) {
        play();
      }
    } else if (animationLoaded) {
      setSpeed(2);
      if (isDarkTheme) {
        setDirection(-1);
      } else {
        // When the animation is first loaded, we need to go to initial frame and play it if it's not dark mode
        // There is no way to say the initial frame is X.
        goToAndPlay(DARK_THEME_FRAME, true);
      }
      initialAnimationRenderStatus.current = true;
    }
  }, [
    isDarkTheme,
    animationLoaded,
    setDirection,
    play,
    animationItem,
    goToAndPlay,
    setSpeed,
  ]);

  return View;
});

export default ThemeToggleAnimation;
