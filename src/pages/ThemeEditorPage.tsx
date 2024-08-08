import styled from 'styled-components';

const PageContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '80vh',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.max.tablet]: {
    minHeight: '100%',
  },
}));

const ThemeEditorPage = () => {
  return <PageContainer>ThemeEditorPage</PageContainer>;
};

export default ThemeEditorPage;
