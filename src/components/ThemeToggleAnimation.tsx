import { useRef, memo, useEffect, useState } from 'react';
import themeAnimation from '../assets/themeLottie.json';
import Lottie, {
  LottieRefCurrentProps,
  LottieComponentProps,
} from 'lottie-react';

const ThemeToggleAnimation = memo(
  ({ isDarkTheme }: { isDarkTheme: boolean }) => {
    // #region Lottie Animation Values
    const DARK_THEME_FRAME = 66;
    const LIGHT_THEME_FRAME = 153;

    const initialAnimationRenderStatus = useRef({
      firstRender: false,
      firstToggle: false,
    });
    const initialThemeValue = useRef(isDarkTheme);
    // Animation goes Light -> Dark -> Light
    const initialSegment: LottieComponentProps['initialSegment'] =
      initialThemeValue
        ? [0, DARK_THEME_FRAME]
        : [DARK_THEME_FRAME, LIGHT_THEME_FRAME];

    // #endregion

    const lottieRef = useRef<LottieRefCurrentProps>(null);
    const [directionReversed, setDirectionReversed] = useState(false);

    // Controls the lottie animation play and direction
    useEffect(() => {
      const { firstRender, firstToggle } = initialAnimationRenderStatus.current;

      if (firstRender) {
        lottieRef.current?.setDirection(directionReversed ? -1 : 1);
        if (firstToggle || initialThemeValue.current) {
          lottieRef.current?.play();
        } else {
          // On the first theme toggle, we need to go to the correct frame since lottie always starts at 0,
          // even if the initialSegment does not include it.
          lottieRef.current?.goToAndPlay(DARK_THEME_FRAME);
          initialAnimationRenderStatus.current = {
            firstToggle: true,
            firstRender,
          };
        }
      }
    }, [directionReversed]);

    // Controls the direction state of the animation based on the theme value change after mounted.
    useEffect(() => {
      const { firstRender, firstToggle } = initialAnimationRenderStatus.current;

      if (firstRender) {
        setDirectionReversed((previous) => !previous);
      } else {
        // Ignore the first render
        // Lottie itself will take care of the initial frame based on the first initialSegment value.
        initialAnimationRenderStatus.current = {
          firstToggle,
          firstRender: true,
        };
      }
    }, [isDarkTheme]);

    return (
      <Lottie
        autoplay={false}
        loop={false}
        initialSegment={initialSegment}
        lottieRef={lottieRef}
        animationData={themeAnimation}
        style={{ height: 'inherit', width: 'inherit' }}
      />
    );
  }
);

export default ThemeToggleAnimation;
