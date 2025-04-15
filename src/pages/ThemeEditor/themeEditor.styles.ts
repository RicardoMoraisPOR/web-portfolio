import styled from 'styled-components';

export const PageContainer = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '40px',
  padding: '40px 0px',
  [theme.breakpoints.max.desktop]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

export const ThemeExample = styled.div(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.isDarkTheme ? 'white' : 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.background,
  color: theme.palette.text,
  padding: '50px',
  flexDirection: 'column',
  gap: '15px',
}));

export const ThemeExampleCard = styled.div({
  padding: 20,
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const ThemeExampleText = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const ColorsWrapper = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '10px',
  alignItems: 'start',
  flexWrap: 'wrap',
  [theme.breakpoints.max.tablet]: {
    gap: '15px',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.max.mobile]: {
    gap: '25px',
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

export const ColorsAndRulesWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export const ThemeDisplayOptions = styled.div({
  display: 'flex',
  gap: '10px',
  height: '20px',
});

export const ApplyButton = styled.button(({ theme }) => ({
  fontFamily: theme.fonts.lato,
  fontSize: '12px !important',
  background: 'none',
  border: 'none',
  padding: '0',
  margin: '0',
  font: 'inherit',
  cursor: 'pointer',
  width: 'fit-content',
  lineHeight: 1.6,
  letterSpacing: '0.5px',
  color: theme.palette.text,
  position: 'relative',
  transition: `color ${theme.transitions.fast}ms linear`,
  textDecoration: 'none', // Remove the default underline
  '&:hover': {
    color: theme.palette.primary,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '-1px', // Adjust this value to move the underline lower
    height: '1px', // Adjust the thickness of the underline
    backgroundColor: 'currentColor', // Use the text color for the underline
  },
}));

export const RuleItemWrapper = styled.div<{ $valid: boolean }>(
  ({ theme, $valid }) => {
    return {
      gap: '5px',
      display: 'flex',
      alignItems: 'start',
      color: theme.palette.text,
      opacity: $valid ? '50%' : '100%',
      '& svg': {
        width: 16,
        height: 16,
        minWidth: 16,
        minHeight: 16,
        fill: theme.palette.text,
        opacity: $valid ? '50%' : '100%',
      },
    };
  }
);

export const RuleItem = styled.span({
  fontSize: '10px',
  fontWeight: '600',
});

export const RulesWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  marginTop: '10px',
});

export const ThemeDisplayTitleWrapper = styled.div({
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'end',
});

export const ThemeDisplayWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});
