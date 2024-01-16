import { useAppTheme } from '../hooks/useAppTheme';
import ThemeToggleAnimation from './ThemeToggleAnimation';

function FloatingMenu() {
  const { toggleTheme } = useAppTheme();
  return (
    <div>
      <div
        onClick={() => {
          toggleTheme?.();
        }}
        style={{
          height: '50px',
          width: '50px',
          borderRadius: '50%',
          backgroundColor: '#0d2530',
        }}
      >
        <ThemeToggleAnimation />
      </div>
    </div>
  );
}

export default FloatingMenu;
