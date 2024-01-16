import GlowEffect from './GlowEffect';
import darkLogo from '../assets/dark-logo.svg';
import lightLogo from '../assets/light-logo.svg';
import { useAppTheme } from '../hooks/useAppTheme';
import styled from 'styled-components';

const Image = styled('img')({
  height: '4rem',
});

function Logo() {
  const { isDarkTheme } = useAppTheme();

  return (
    <GlowEffect>
      <Image
        src={isDarkTheme ? darkLogo : lightLogo}
        alt="Ricardo Morais Dev Logo"
      />
    </GlowEffect>
  );
}

export default Logo;
