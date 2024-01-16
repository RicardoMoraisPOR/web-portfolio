import styled from 'styled-components';
import { useAppTheme } from '../hooks/useAppTheme';
import ThemeToggleAnimation from './ThemeToggleAnimation';

const ThemeToggleButton = styled('button')(({ theme }) => {
  return {
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary,
    border: 'none',
    padding: '0px',
    cursor: 'pointer',
  };
});

const ChipMenu = styled('div')(({ theme }) => {
  return {
    height: '40px',
    borderRadius: '20px',
    padding: '0px 30px',
    backgroundColor: `${theme.palette.secondary}aa`,
    display: 'flex',
    width: 'fit-content',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',
    gap: 30,
  };
});

const ChipMenuWrapper = styled('div')({
  display: 'flex',
});

function FloatingMenu() {
  const { toggleTheme } = useAppTheme();
  return (
    <ChipMenuWrapper>
      <ChipMenu>
        <div>About</div>
        <div>Project</div>
        <div>Uses</div>
      </ChipMenu>
      <ThemeToggleButton
        type="button"
        aria-label="Theme Toggle"
        onClick={() => {
          toggleTheme?.();
        }}
      >
        <ThemeToggleAnimation />
      </ThemeToggleButton>
    </ChipMenuWrapper>
  );
}

export default FloatingMenu;
