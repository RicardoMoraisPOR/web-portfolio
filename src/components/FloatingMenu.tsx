import styled from 'styled-components';
import { useAppTheme } from '../hooks/useAppTheme';
import ThemeToggleAnimation from './ThemeToggleAnimation';
import FlareCard from './FlareCard';
import GlowEffect from './GlowEffect';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { alphaHexConverter } from '../utils/themeUtils';

const ThemeToggleButton = styled('button')({
  height: '30px',
  width: '30px',
  borderRadius: '50%',
  backgroundColor: 'transparent',
  border: 'none',
  padding: '0px',
  cursor: 'pointer',
});

const ChipMenu = styled('div')({
  height: '30px',
  padding: '0px 30px',
  display: 'flex',
  width: 'fit-content',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 30,
});

const ChipMenuWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const ChipMenuLink = styled(Link)(({ theme }) => {
  return {
    fontSize: '12px',
    textDecoration: 'none',
    color: theme.palette.primary,
    transition: 'color 300ms',
    userSelect: 'none',

    '&:focus-visible, &:hover': {
      color: theme.palette.text,
    },
  };
});

const LogoLink = styled(Link)(({ theme }) => {
  return {
    willChange: 'filter',
    transition: 'filter 300ms',
    '& svg': {
      transition: 'fill 0.3s ease',
      fill: theme.palette.secondary,
    },
    '&:hover': {
      '& svg': {
        fill: 'url(#a)',
      },
    },
    '&:focus-visible': {
      filter: `drop-shadow(0 0 2em ${alphaHexConverter(
        theme.palette.primary,
        50
      )})`,
      '& svg': {
        fill: 'url(#a)',
      },
    },
  };
});

function FloatingMenu() {
  const { toggleTheme } = useAppTheme();
  return (
    <ChipMenuWrapper>
      <LogoLink to="/">
        <Logo />
      </LogoLink>
      <ChipMenuWrapper>
        <GlowEffect $transparency={10}>
          <FlareCard $intensity={8} $borderRadius={20}>
            <ChipMenu>
              <ChipMenuLink to="/about">About</ChipMenuLink>
              <ChipMenuLink to="/projects">Project</ChipMenuLink>
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
