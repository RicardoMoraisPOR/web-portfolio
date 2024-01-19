import GlowEffect from './GlowEffect';
import { useTheme } from 'styled-components';
import { useMemo } from 'react';
import { interpolateHexColors } from '../utils/themeUtils';

const Logo = () => {
  const theme = useTheme();

  const linearGradientStops = useMemo(() => {
    const intermediateColors = interpolateHexColors(
      theme.palette.primary,
      theme.palette.accent,
      2
    );
    intermediateColors.push(theme.palette.primary);
    return (
      <>
        <stop stopColor={theme.palette.accent} />
        <stop offset=".47" stopColor={theme.palette.primary}>
          <animate
            attributeName="stop-color"
            values={intermediateColors.join(';')}
            dur="800ms"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="1" stopColor={theme.palette.accent}>
          <animate
            attributeName="stop-color"
            values={intermediateColors.reverse().join(';')}
            dur="800ms"
            repeatCount="indefinite"
          />
        </stop>
        <animateTransform
          attributeName="gradientTransform"
          type="rotate"
          from="0 .5 .5"
          to="360 .5 .5"
          dur="800ms"
          repeatCount="indefinite"
        />
      </>
    );
  }, [theme.palette.accent, theme.palette.primary]);

  return (
    <GlowEffect $transparency={80}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="3rem"
        viewBox="0 0 204 133"
      >
        <path d="M65.5 9.5c34 15.5 27.5 48 12.5 61S52.5 86 52.5 86c-17.5-13-8-21.5.5-26.5 10-4.5 6.5-17.5 0-21H31.5V7.99999c12.692 0 29-.7794 34 1.50001Z" />
        <path d="M0 22C0 14.268 6.26801 8 14 8h19v115c0 4.971-4.0294 9-9 9H9c-4.97056 0-9-4.029-9-9V22Z" />
        <path d="M171 21c0-4.4183 3.582-8 8-8h16c4.971 0 9 4.0294 9 9v101c0 4.971-4.029 9-9 9h-15c-4.971 0-9-4.029-9-9V21Z" />
        <path d="M172.553 15.7141c3.515-3.5147 9.213-3.5147 12.728 0l10.606 10.6066c3.515 3.5148 3.515 9.2132 0 12.728l-32.423 32.4237c-3.515 3.5147-9.214 3.5147-12.728 0l-7.071-7.071c-5.468-5.4674-5.468-14.3317 0-19.799l28.888-28.8883Z" />
        <path d="M121.472 78.1583c3.514-3.5147 9.213-3.5147 12.728 0l8.431 8.4311c3.514 3.5147 3.514 9.2132 0 12.7279l-28.595 28.5947c-5.467 5.467-14.3315 5.467-19.7989 0l-4.8956-4.896c-3.5147-3.514-3.5147-9.213 0-12.728l32.1305-32.1297Z" />
        <path d="M120.334 43.2201c-3.514-3.5147-3.514-9.2132 0-12.7279l8.486-8.4853c3.514-3.5147 9.213-3.5147 12.728 0l30.075 30.0754c3.515 3.5147 3.515 9.2132 0 12.7279l-8.485 8.4853c-3.515 3.5147-9.214 3.5147-12.728 0l-30.076-30.0754Z" />
        <path d="M47.0448 80.9872c-3.9053-3.9053-3.9053-10.2369 0-14.1422l4.1173-4.1173c5.4673-5.4673 14.3316-5.4673 19.7989 0l44.082 44.0813c5.467 5.468 5.467 14.332 0 19.799l-1.289 1.289c-5.468 5.468-14.3318 5.468-19.7992 0l-46.91-46.9098Z" />
        <path d="M118 12.5c0 6.9036-5.596 12.5-12.5 12.5C98.5964 25 93 19.4036 93 12.5 93 5.59644 98.5964 0 105.5 0c6.904 0 12.5 5.59644 12.5 12.5Z" />
        <path d="M118 61.5c0 6.9036-5.596 12.5-12.5 12.5C98.5964 74 93 68.4036 93 61.5S98.5964 49 105.5 49c6.904 0 12.5 5.5964 12.5 12.5Z" />
        <path d="M57.0797 110H54c-3.3137 0-6 2.686-6 6v7c0 4.971 4.0294 9 9 9h21v-1.08L57.0797 110Z" />
        <path d="M149.92 110H153c3.314 0 6 2.686 6 6v7c0 4.971-4.029 9-9 9h-21v-1.08L149.92 110Z" />
        <defs>
          <linearGradient
            id="a"
            x1="-72.1463"
            x2="306.664"
            y1="-38.029"
            y2="138.953"
            gradientUnits="userSpaceOnUse"
          >
            {linearGradientStops}
          </linearGradient>
        </defs>
      </svg>
    </GlowEffect>
  );
};

export default Logo;
