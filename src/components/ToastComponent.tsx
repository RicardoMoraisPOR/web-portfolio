import * as Toast from '@radix-ui/react-toast';
import styled from 'styled-components';
import { alphaHexConverter } from '../theme/AppThemeUtils';
import { useCallback, useState } from 'react';
import { ToastComponentProps } from '../contexts/ToastContext';

const ToastViewport = styled(Toast.Viewport)({
  '--viewport-padding': '25px',
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: 'var(--viewport-padding)',
  gap: '10px',
  width: '450px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
});

const ToastRoot = styled(Toast.Root)(({ theme }) => ({
  backgroundColor: theme.palette.primary,
  color: theme.palette.background,
  borderRadius: '8px',
  minWidth: '340px',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  "&[data-state='open']": {
    animation: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
  },
  "&[data-state='closed']": {
    animation: 'swipeOut 100ms ease-in',
  },
  "&[data-swipe='move']": {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  "&[data-swipe='cancel']": {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  "&[data-swipe='end']": {
    animation: 'swipeOut 100ms ease-out',
  },
  '@keyframes slideIn': {
    from: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
    to: { transform: 'translateX(0)' },
  },
  '@keyframes swipeOut': {
    from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
    to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
  },
}));

const MessageContent = styled('div')<{ $isGrabbing: boolean }>(
  ({ $isGrabbing }) => ({
    cursor: $isGrabbing ? 'grabbing' : 'grab',
    minHeight: '80px',
    display: 'flex',
    padding: '4px 8px',
    height: '100%',
  })
);

const ActionButton = styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem 1.5rem',
  borderRadius: '4px',
  border: `1px solid ${theme.palette.secondary}`,
  fontSize: '14px',
  margin: '0px 20px',
  color: theme.palette.background,
  backgroundColor: 'transparent',
  cursor: 'pointer',
  height: '14px',
  justifySelf: 'center',
  alignSelf: 'center',
  whiteSpace: 'nowrap',
  '&:hover': {
    backgroundColor: alphaHexConverter(theme.palette.accent, 20),
  },
}));

const ToastComponent = ({
  open,
  message,
  title,
  actionText,
  action,
  onClose,
}: ToastComponentProps) => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  const onGrabAction = useCallback(
    (grab: boolean) => () => {
      setIsGrabbing(grab);
    },
    []
  );

  const onActionClick = useCallback(() => {
    action?.();
    onClose();
  }, [action, onClose]);

  return (
    <Toast.Provider>
      <ToastRoot
        open={open}
        onSwipeStart={onGrabAction(true)}
        onSwipeCancel={onGrabAction(false)}
        onSwipeEnd={onClose}
      >
        <MessageContent $isGrabbing={isGrabbing}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '8px 8px',
              justifyContent: 'space-evenly',
              alignItems: 'space-evenly',
            }}
          >
            <span style={{ fontSize: '14px', fontWeight: '700' }}>{title}</span>
            <span style={{ fontSize: '12px' }}>{message}</span>
          </div>
          <ActionButton type="button" onClick={onActionClick}>
            {actionText}
          </ActionButton>
        </MessageContent>
      </ToastRoot>
      <ToastViewport />
    </Toast.Provider>
  );
};

export default ToastComponent;
