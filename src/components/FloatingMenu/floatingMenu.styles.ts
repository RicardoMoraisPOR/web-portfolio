import { alphaHexConverter } from '@theme/themeUtils';
import { Link } from 'react-router-dom';
import styled, { CSSObject } from 'styled-components';
import {
  GlowEffectComponentProps,
  GlowEffectStyle,
} from '../GlowEffect/glowEffect.types';

export const CustomThemeLink = styled(Link)<GlowEffectComponentProps>(
  ({ $isTouching, theme }) => {
    const glowStyle = GlowEffectStyle(theme, { $transparency: 100 });
    const hoverStyle: CSSObject = {
      opacity: '100%',
      ...glowStyle.filter,
    };
    return {
      ...glowStyle.animation,
      height: 'clamp(2rem, 2vw, 3rem)',
      width: 'clamp(2rem, 2vw, 3rem)',
      backgroundColor: 'transparent',
      border: 'none',
      padding: '0px',
      cursor: 'pointer',
      opacity: $isTouching ? '100%' : '60%',
      svg: {
        transform: 'unset !important',
      },
      transition: `opacity ${theme.transitions.fast}ms ease, fill ${theme.transitions.fast}ms ease`,
      '@media (hover: hover) and (pointer: fine)': {
        '&:hover': hoverStyle,
        '&:focus-visible:not(:hover)': hoverStyle,
      },
      ...($isTouching && hoverStyle),
      '&::after': {
        display: 'none',
      },
    };
  }
);

export const ThemeToggleButton = styled.button<
  Pick<GlowEffectComponentProps, '$isTouching'>
>(({ $isTouching, theme }) => {
  const glowStyle = GlowEffectStyle(theme, { $transparency: 30 });
  const hoverStyle: CSSObject = {
    opacity: '100%',
    ...glowStyle.filter,
  };
  return {
    ...glowStyle.animation,
    height: 'clamp(2rem, 2vw, 3rem)',
    width: 'clamp(3rem, 5vw, 4rem)',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '0px',
    cursor: 'pointer',
    opacity: $isTouching ? '100%' : '60%',
    svg: {
      transform: 'unset !important',
      transition: 'unset',
    },
    path: {
      transition: `unset`,
    },
    rect: {
      transition: `unset`,
    },
    transition: `opacity ${theme.transitions.fast}ms ease, fill ${theme.transitions.fast}ms ease`,
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': hoverStyle,
      '&:focus-visible:not(:hover)': hoverStyle,
    },
    ...($isTouching && hoverStyle),
  };
});

export const StyledSection = styled.section(({ theme }) => ({
  background: alphaHexConverter(theme.palette.secondary, 30),
  display: 'flex',
  gap: 'clamp(1.6rem, 1vw, 2.2rem)',
  padding: '15px 25px',
  position: 'relative',
  borderRadius: '5px',
  [theme.breakpoints.max.tablet]: {
    gap: '15px',
  },
}));

export const Highlight = styled.div(({ theme }) => ({
  position: 'absolute',
  background: alphaHexConverter(theme.palette.primary, 20),
  borderRadius: '5px',
  pointerEvents: 'none',
}));

export const Option = styled(Link)<{ $selected: boolean }>(
  ({ theme, $selected }) => ({
    color: theme.palette.text,
    fontSize: 'clamp(0.8rem, 1vw, 1.4rem)',
    ...($selected
      ? {
          '&:hover': {
            color: theme.palette.text,
          },
        }
      : {}),
    '&::after': {
      display: 'none',
    },
  })
);

export const OptionTheme = styled.span<{ $selected: boolean }>(
  ({ theme, $selected }) => ({
    color: theme.palette.text,
    fontSize: 'clamp(0.8rem, 1vw, 1.4rem)',
    ...($selected
      ? {
          '&:hover': {
            color: theme.palette.text,
          },
        }
      : {}),
    '&::after': {
      display: 'none',
    },
  })
);

export const ChipMenuWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.max.mobile]: {
    justifyContent: 'center',
  },
}));

export const ThemeOptionsWrapper = styled.div({
  display: 'flex',
  alignItems: 'end',
  gap: '1rem',
});

export const LogoLink = styled(Link)<GlowEffectComponentProps>(
  ({ theme, $isTouching, ...rest }) => {
    const glowStyle = GlowEffectStyle(theme, rest);

    const hoverStyle: CSSObject = {
      ...glowStyle.filter,
      '& svg': {
        opacity: '100%',
        fill: 'url(#a)',
      },
    };

    return {
      ...glowStyle.animation,
      '&::after': {
        content: 'none',
      },
      '& svg': {
        opacity: '40%',
        transition: `fill ${theme.transitions.fast}ms ease, opacity ${theme.transitions.fast}ms ease`,
        fill: theme.palette.primary,
      },
      '@media (hover: hover) and (pointer: fine)': {
        '&:hover': hoverStyle,
        '&:focus-visible:not(:hover)': hoverStyle,
      },
      ...($isTouching && hoverStyle),
    };
  }
);
