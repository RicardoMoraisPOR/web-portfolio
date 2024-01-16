import { useState } from 'react';
import ThemeToggleAnimation from './ThemeToggleAnimation';

function FloatingMenu() {
  const [t, setT] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setT(!t);
        }}
        style={{
          height: '40px',
          width: '40px',
          borderRadius: '50%',
          backgroundColor: '#0d2530',
        }}
      >
        <ThemeToggleAnimation isDarkTheme={t} />
      </div>
    </div>
  );
}

export default FloatingMenu;
