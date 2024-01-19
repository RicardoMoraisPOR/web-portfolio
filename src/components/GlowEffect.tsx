import styled, { CSSObject, DefaultTheme } from 'styled-components';
import { alphaHexConverter } from '../utils/themeUtils';

export type GlowEffectpProps = {
  $transparency: Parameters<typeof alphaHexConverter>[1];
};

export const GlowEffectStyle = (
  theme: DefaultTheme,
  glowProps: GlowEffectpProps
) => {
  return {
    animation: {
      willChange: 'filter',
      transition: 'filter 300ms',
    } as CSSObject,
    filter: {
      filter: `drop-shadow(0 0 2em ${alphaHexConverter(
        theme.palette.primary,
        glowProps.$transparency
      )})`,
    } as CSSObject,
  };
};

const GlowEffect = styled('div')<GlowEffectpProps>(({ theme, ...rest }) => {
  const style = GlowEffectStyle(theme, rest);
  return {
    ...style.animation,
    '&:hover': {
      ...style.filter,
    },
    '&:focus-visible:not(:hover)': {
      ...style.filter,
    },
  };
});

export default GlowEffect;
