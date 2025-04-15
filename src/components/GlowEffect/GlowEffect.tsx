import useTouching from '@hooks/useIsTouching';
import { FC, PropsWithChildren } from 'react';
import { GlowEffectProps } from './glowEffect.types';
import { GlowEffectComponent } from './glowEffects.styles';

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
