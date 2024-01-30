import styled, { CSSObject, DefaultTheme } from 'styled-components';
import { alphaHexConverter } from '../theme/AppThemeUtils';
import { FC, PropsWithChildren } from 'react';
import useTouching from '../hooks/useIsTouching';

export type GlowEffectComponentProps = {
  $transparency: Parameters<typeof alphaHexConverter>[1];
  $isTouching?: boolean;
};

type GlowEffectProps = Omit<GlowEffectComponentProps, '$isTouching'>;

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

const GlowEffectComponent = styled('div')<GlowEffectComponentProps>(
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

const GlowEffect: FC<PropsWithChildren<GlowEffectProps>> = ({
  children,
  ...rest
}) => {
  const { isTouching, handleTouch } = useTouching();

  return (
    <GlowEffectComponent
      {...rest}
      $isTouching={isTouching}
      onTouchStart={handleTouch(true)}
      onTouchEnd={handleTouch(false)}
      onTouchCancel={handleTouch(false)}
    >
      {children}
    </GlowEffectComponent>
  );
};

export default GlowEffect;
