import { alphaHexConverter } from '@theme/appThemeUtils';
import { CSSObject, DefaultTheme } from 'styled-components';

export type GlowEffectComponentProps = {
  $transparency: Parameters<typeof alphaHexConverter>[1];
  $isTouching?: boolean;
};

export type GlowEffectProps = Omit<GlowEffectComponentProps, '$isTouching'>;

export const GlowEffectStyle = (
  theme: DefaultTheme,
  glowProps: GlowEffectProps
) => {
  return {
    animation: {
      willChange: 'filter',
      transition: `filter ${theme.transitions.fast}ms`,
    } as CSSObject,
    filter: {
      filter: `drop-shadow(0 0 2em ${alphaHexConverter(
        theme.palette.primary,
        glowProps.$transparency
      )})`,
    } as CSSObject,
  };
};
