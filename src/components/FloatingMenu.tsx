import styled from 'styled-components';
import useAppThemeContext from '../hooks/useAppThemeContext';
import ThemeToggleAnimation from './ThemeToggleAnimation';
import FlareCard from './FlareCard';
import GlowEffect, { GlowEffectStyle, GlowEffectpProps } from './GlowEffect';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const ThemeToggleButton = styled('button')({
  height: '30px',
  width: '30px',
  borderRadius: '50%',
  backgroundColor: 'transparent',
  border: 'none',
  padding: '0px',
  cursor: 'pointer',
  svg: {
    transform: 'unset !important',
  },
});

const ChipMenu = styled('div')(({ theme }) => {
  return {
    height: '30px',
    padding: '0px 30px',
    display: 'flex',
    width: 'fit-content',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    [theme.breakpoints.max.mobile]: {
      gap: 15,
      padding: '0px 15px',
    },
  };
});

const ChipMenuWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const ChipMenuLink = styled(Link)(({ theme }) => {
  return {
    fontSize: '12px',
    fontWeight: 500,
    textDecoration: 'none',
    color: theme.palette.primary,
    transition: `color ${theme.transitions.fast}ms linear`,
    userSelect: 'none',

    '&:focus-visible, &:hover': {
      color: theme.palette.text,
    },
  };
});

const LogoLink = styled(Link)<GlowEffectpProps>(({ theme, ...rest }) => {
  const glowStyle = GlowEffectStyle(theme, rest);

  return {
    ...glowStyle.animation,

    '& svg': {
      opacity: '40%',
      transition: `fill ${theme.transitions.fast}ms ease, opacity ${theme.transitions.fast}ms ease`,
      fill: theme.palette.primary,
    },
    '&:hover': {
      ...glowStyle.filter,
      '& svg': {
        opacity: '100%',
        fill: 'url(#a)',
      },
    },
    '&:focus-visible:not(:hover)': {
      ...glowStyle.filter,
      '& svg': {
        opacity: '100%',
        fill: 'url(#a)',
      },
    },
  };
});

function FloatingMenu() {
  const { toggleTheme } = useAppThemeContext();
  return (
    <ChipMenuWrapper>
      <LogoLink to="/" $transparency={30} aria-label="Homepage">
        <Logo />
      </LogoLink>
      <ChipMenuWrapper>
        <GlowEffect $transparency={10}>
          <FlareCard $intensity={8} $borderRadius={20}>
            <ChipMenu>
              <ChipMenuLink to="/about">About</ChipMenuLink>
              <ChipMenuLink to="/projects">Projects</ChipMenuLink>
              <ChipMenuLink to="/uses">Uses</ChipMenuLink>
            </ChipMenu>
          </FlareCard>
        </GlowEffect>
        <div style={{ marginLeft: '11px' }}>
          <GlowEffect $transparency={20}>
            <FlareCard $intensity={8} $borderRadius={20}>
              <ThemeToggleButton
                type="button"
                aria-label="Theme Toggle"
                onClick={() => {
                  toggleTheme?.();
                }}
              >
                <ThemeToggleAnimation />
              </ThemeToggleButton>
            </FlareCard>
          </GlowEffect>
        </div>
      </ChipMenuWrapper>
    </ChipMenuWrapper>
  );
}

export default FloatingMenu;
