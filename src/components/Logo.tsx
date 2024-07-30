import styled, { CSSObject, useTheme } from 'styled-components';
import { useMemo } from 'react';
import { interpolateHexColors } from '../theme/AppThemeUtils';

const SVGLogo = styled('svg')<Pick<LogoProps, '$height'>>(
  ({ theme, $height }) => {
    return {
      height: $height || '48px',
      [theme.breakpoints.max.mobile]: {
        height: $height || '30px',
      },
    };
  }
);

type LogoProps = {
  fill?: CSSObject['fill'];
  $height?: CSSObject['height'];
  disableRipple?: boolean;
};

const Logo = ({ fill, $height, disableRipple }: LogoProps) => {
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
            dur={`${theme.transitions.normal}ms`}
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="1" stopColor={theme.palette.accent}>
          <animate
            attributeName="stop-color"
            values={intermediateColors.reverse().join(';')}
            dur={`${theme.transitions.normal}ms`}
            repeatCount="indefinite"
          />
        </stop>
        <animateTransform
          attributeName="gradientTransform"
          type="rotate"
          from="0 .5 .5"
          to="360 .5 .5"
          dur={`${theme.transitions.normal}ms`}
          repeatCount="indefinite"
        />
      </>
    );
  }, [theme.palette.accent, theme.palette.primary, theme.transitions.normal]);

  return (
    <SVGLogo
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 204 133"
      $height={$height}
      fill={fill}
    >
      <path d="M118 12.5C118 19.4036 112.404 25 105.5 25C98.5964 25 93 19.4036 93 12.5C93 5.59644 98.5964 0 105.5 0C112.404 0 118 5.59644 118 12.5Z" />
      <path d="M78.3896 70.1562C93.11 56.9357 99.2042 24.8651 65.5 9.5C61.506 7.6792 50.2965 7.81018 39.4783 7.93658C36.7535 7.96843 34.0536 7.99998 31.5 7.99998L14 8C6.26801 8 0 14.268 0 22V123C0 127.971 4.02942 132 9 132H24C28.9706 132 33 127.971 33 123V38.5H53C59.5 42 63 55 53 59.5C44.8491 64.2947 35.7785 72.3078 50.4788 84.4212L93.9548 127.897C96.5386 130.481 99.8811 131.844 103.265 131.985C107.133 132.225 111.081 130.867 114.036 127.912L142.631 99.3173C146.145 95.8026 146.145 90.1041 142.631 86.5894L134.2 78.1583C130.685 74.6436 124.986 74.6436 121.472 78.1583L103.932 95.6983L78.3896 70.1562Z" />
      <path d="M179 13C178.066 13 177.169 13.1601 176.336 13.4543C174.951 13.8674 173.646 14.6206 172.553 15.7141L153.904 34.3632L141.548 22.0069C138.033 18.4922 132.334 18.4922 128.82 22.0069L120.334 30.4922C116.82 34.0069 116.82 39.7054 120.334 43.2201L150.41 73.2955C153.924 76.8102 159.623 76.8102 163.138 73.2955L171 65.4331V123C171 127.971 175.029 132 180 132H195C199.971 132 204 127.971 204 123V22C204 17.0294 199.971 13 195 13H179Z" />
      <path d="M105.5 74C112.404 74 118 68.4036 118 61.5C118 54.5964 112.404 49 105.5 49C98.5964 49 93 54.5964 93 61.5C93 68.4036 98.5964 74 105.5 74Z" />
      <path d="M57.0797 110H54C50.6863 110 48 112.686 48 116V123C48 127.971 52.0294 132 57 132H78V130.92L57.0797 110Z" />
      <path d="M153 110H149.92L129 130.92V132H150C154.971 132 159 127.971 159 123V116C159 112.686 156.314 110 153 110Z" />
      {!disableRipple && (
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
      )}
    </SVGLogo>
  );
};

export default Logo;
