import * as Select from '@radix-ui/react-select';
import styled from 'styled-components';
import { alphaHexConverter } from '@theme/themeUtils';

export const StyledInput = styled.input(({ theme }) => ({
  flex: 1,
  background: 'none',
  border: '1px solid',
  padding: '10px',
  fontSize: 'clamp(1rem, 0.8vw, 1.6rem)',
  outline: 'none',
  color: theme.palette.text,
  borderRadius: '4px',
  borderColor: alphaHexConverter(theme.palette.primary, 60),
  '&:hover': {
    borderColor: theme.palette.primary,
  },
  '&:focus-visible': {
    outline: `1px dashed ${alphaHexConverter(theme.palette.primary, 30)}`,
    outlineOffset: '2px',
    borderColor: theme.palette.primary,
  },
  '&::placeholder': {
    color: alphaHexConverter(theme.palette.text, 20),
  },
  [theme.breakpoints.max.mobile]: {
    flex: 'unset',
    height: '48px',
  },
}));

export const UsesPageWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '40px 0px',
  [theme.breakpoints.max.tablet]: {
    padding: '0px 0px 40px 0px',
  },
}));

export const UsesPageInfoWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  maxWidth: '50%',
  flexDirection: 'column',
  gap: '30px',
  padding: '40px 0px',
  [theme.breakpoints.max.tablet]: {
    maxWidth: '90%',
  },
  [theme.breakpoints.max.mobile]: {
    maxWidth: '100%',
  },
}));

export const UsesPageTechWrapper = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: 'clamp(10px, 0.6vw, 1rem)',
});

export const TechItem = styled.div({
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
});

export const Trigger = styled(Select.Trigger)(({ theme }) => ({
  all: 'unset',
  minWidth: '200px',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  padding: '10px 25px',
  lineHeight: '1',
  gap: '5px',
  backgroundColor: 'none',
  color: theme.palette.text,
  border: '1px solid',
  borderColor: alphaHexConverter(theme.palette.primary, 60),
  '& span': {
    fontSize: 'clamp(1rem, 0.8vw, 1.6rem)',
  },
  '&:hover': {
    borderColor: theme.palette.primary,
  },
  '&:focus-visible': {
    outline: `1px dashed ${alphaHexConverter(theme.palette.primary, 30)}`,
    outlineOffset: '2px',
    borderColor: theme.palette.primary,
  },
}));

export const Content = styled(Select.Content)(({ theme }) => ({
  overflow: 'hidden',
  backgroundColor: theme.palette.primary,
  borderRadius: '6px',
  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.12)',
  zIndex: 2,
  minWidth: 'var(--radix-select-trigger-width)',
  maxHeight: 'var(--radix-select-content-available-height)',
}));

export const Viewport = styled(Select.Viewport)({
  padding: '5px',
});

export const Item = styled(Select.Item)(({ theme }) => ({
  all: 'unset',
  cursor: 'pointer',
  lineHeight: '1',
  color: theme.palette.background,
  borderRadius: '3px',
  display: 'flex',
  alignItems: 'center',
  height: '25px',
  padding: '2px 35px 2px 25px',
  position: 'relative',
  userSelect: 'none',
  '& span': {
    fontSize: '1rem',
  },
  '&[data-highlighted]': {
    backgroundColor: theme.palette.secondary,
    color: theme.palette.text,
  },
}));

export const SearchWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  [theme.breakpoints.max.mobile]: {
    flexDirection: 'column',
  },
}));

export const Label = styled(Select.Label)(({ theme }) => ({
  padding: '0 25px',
  lineHeight: '25px',
  fontSize: '1rem',
  color: alphaHexConverter(theme.palette.secondary, 80),
}));

export const Separator = styled(Select.Separator)(({ theme }) => ({
  height: '1px',
  backgroundColor: alphaHexConverter(theme.palette.secondary, 20),
  margin: '5px',
  border: 'none',
}));

export const ItemText = styled.span({
  fontSize: 'clamp(1rem, 0.8vw, 1.6rem)',
});

export const ItemTextSecret = styled(ItemText)({
  transform: 'translateX(-15px) skew(0deg, -8deg) translateY(2px)',
});
