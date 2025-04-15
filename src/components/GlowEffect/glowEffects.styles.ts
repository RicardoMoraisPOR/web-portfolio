import styled from 'styled-components';
import { GlowEffectComponentProps, GlowEffectStyle } from './glowEffect.types';

export const GlowEffectComponent = styled.div<GlowEffectComponentProps>(
  ({ theme, $isTouching, ...rest }) => {
    const style = GlowEffectStyle(theme, rest);
    return {
      ...style.animation,
      '@media (hover: hover) and (pointer: fine)': {
        '&:hover': {
          ...style.filter,
        },
        '&:focus-visible:not(:hover)': {
          ...style.filter,
        },
      },
      ...($isTouching && {
        ...style.filter,
      }),
    };
  }
);
