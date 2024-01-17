import styled from 'styled-components';
import { alphaHexConverter } from '../utils/themeUtils';

type GlowEffectpProps = {
  $transparency: Parameters<typeof alphaHexConverter>[1];
};

const GlowEffect = styled('div')<GlowEffectpProps>(
  ({ theme, $transparency }) => {
    return {
      willChange: 'filter',
      transition: 'filter 300ms',
      '&:hover': {
        filter: `drop-shadow(0 0 2em ${alphaHexConverter(
          theme.palette.primary,
          $transparency
        )})`,
      },
    };
  }
);

export default GlowEffect;
