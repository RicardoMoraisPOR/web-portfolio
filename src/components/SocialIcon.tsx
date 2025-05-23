import useTouching from '@hooks/useIsTouching';
import { FC, PropsWithChildren } from 'react';
import styled, { CSSObject } from 'styled-components';
import {
  GlowEffectComponentProps,
  GlowEffectStyle,
} from './GlowEffect/glowEffect.types';

const SocialIconLink = styled.a<
  Omit<GlowEffectComponentProps, '$transparency'>
>(({ theme, $isTouching }) => {
  const glowStyle = GlowEffectStyle(theme, { $transparency: 100 });
  const hoverStyle: CSSObject = {
    svg: {
      opacity: '100%',
      ...glowStyle.filter,
    },
  };
  return {
    cursor: 'pointer',
    display: 'flex',
    ...glowStyle.animation,
    '&::after': {
      content: 'none',
    },
    svg: {
      fill: theme.palette.primary,
      opacity: $isTouching ? '100%' : '40%',
      width: '20px',
      height: '20px',
      transition: `opacity ${theme.transitions.fast}ms ease, fill ${theme.transitions.fast}ms ease`,
      ...($isTouching && glowStyle.filter),
    },
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': hoverStyle,
      '&:focus-visible:not(:hover)': hoverStyle,
    },
  };
});

type SocialIconProps = {
  url: string;
  ariaLabel: string;
};

const SocialIcon: FC<PropsWithChildren<SocialIconProps>> = ({
  url,
  ariaLabel,
  children,
}) => {
  const { isTouching, handleTouch } = useTouching();
  return (
    <SocialIconLink
      href={url}
      target="_blank"
      aria-label={ariaLabel}
      $isTouching={isTouching}
      onTouchStart={handleTouch(true)}
      onTouchEnd={handleTouch(false)}
      onTouchCancel={handleTouch(false)}
    >
      {children}
    </SocialIconLink>
  );
};

export default SocialIcon;
