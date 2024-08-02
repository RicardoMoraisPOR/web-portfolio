import styled, { CSSObject } from 'styled-components';
import useAppThemeContext from '../hooks/useAppThemeContext';
import ThemeToggleAnimation from './ThemeToggleAnimation';
import GlowEffect, {
  GlowEffectStyle,
  GlowEffectComponentProps,
} from './GlowEffect';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import useTouching from '../hooks/useIsTouching';
import SocialIcon from './SocialIcon';
import StackOverflowIcon from '../assets/Icons/StackOverflow';
import GithubIcon from '../assets/Icons/Github';
import LinkedInIcon from '../assets/Icons/LinkedIn';
import FlareCard from './FlareCard';

const ThemeToggleButton = styled('button')<
  Pick<GlowEffectComponentProps, '$isTouching'>
>(({ $isTouching, theme }) => {
  const glowStyle = GlowEffectStyle(theme, { $transparency: 100 });
  const hoverStyle: CSSObject = {
    opacity: '100%',
    ...glowStyle.filter,
  };
  return {
    ...glowStyle.animation,
    height: '30px',
    width: '30px',
    borderRadius: '50%',
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
  };
});

const ChipMenuWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const SocialsWrapper = styled('div')({
  display: 'flex',
  gap: '16px',
  justifyContent: 'center',
  padding: '16px',
});

const LogoLink = styled(Link)<GlowEffectComponentProps>(
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

const FloatingMenu = () => {
  const { toggleTheme } = useAppThemeContext();
  const { isTouching, handleTouch } = useTouching();

  return (
    <ChipMenuWrapper>
      <LogoLink
        to="/"
        $isTouching={isTouching}
        $transparency={30}
        aria-label="Homepage"
        onTouchStart={handleTouch(true)}
        onTouchEnd={handleTouch(false)}
        onTouchCancel={handleTouch(false)}
      >
        <Logo />
      </LogoLink>
      <SocialsWrapper>
        <SocialIcon
          url="https://github.com/RicardoMoraisPOR"
          ariaLabel="Ricardo Morais Github profile"
        >
          <GithubIcon />
        </SocialIcon>
        <SocialIcon
          url="https://www.linkedin.com/in/ricardo-dias-morais/"
          ariaLabel="Ricardo Morais LinkedIn profile"
        >
          <LinkedInIcon />
        </SocialIcon>
        <SocialIcon
          url="https://stackoverflow.com/users/8182493/ricardo-dias-morais"
          ariaLabel="Ricardo Morais StackOverflow profile"
        >
          <StackOverflowIcon />
        </SocialIcon>
      </SocialsWrapper>
      <GlowEffect $transparency={50}>
        <FlareCard $intensity={8} $borderRadius={50}>
          <ThemeToggleButton
            type="button"
            aria-label="Theme Toggle"
            $isTouching={isTouching}
            onTouchStart={handleTouch(true)}
            onTouchEnd={handleTouch(false)}
            onTouchCancel={handleTouch(false)}
            onClick={() => {
              toggleTheme?.();
            }}
          >
            <ThemeToggleAnimation />
          </ThemeToggleButton>
        </FlareCard>
      </GlowEffect>
    </ChipMenuWrapper>
  );
};

export default FloatingMenu;
