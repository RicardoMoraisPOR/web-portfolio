import styled from 'styled-components';

const GlowEffect = styled('div')(({ theme }) => {
  return {
    willChange: 'filter',
    transition: 'filter 300ms',
    '&:hover': {
      filter: `drop-shadow(0 0 2em ${theme.palette.primary}aa)`,
    },
  };
});

export default GlowEffect;
