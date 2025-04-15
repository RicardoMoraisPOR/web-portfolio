import themeAnimation from '@assets/lottie/themeLottie.json';
import useAppThemeContext from '@hooks/useAppThemeContext';
import { useLottie } from 'lottie-react';
import { memo, useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

type AnimationDirection = 1 | -1;

const ThemeToggleAnimation = memo(() => {
  const { isDarkTheme } = useAppThemeContext();
  const theme = useTheme();

  // #region Lottie Animation Values
  const LIGHT_THEME_FRAME = 0;
  const DARK_THEME_FRAME = 22;

  const initialAnimationRenderStatus = useRef(false);
  const [showAnimation, setShowAnimation] = useState(false);
  // #endregion

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
      animationData: themeAnimation,
      loop: false,
      autoplay: false,
      initialSegment: [LIGHT_THEME_FRAME, DARK_THEME_FRAME],
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
      setSpeed(4);
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
