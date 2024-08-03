import * as Toast from '@radix-ui/react-toast';
import styled from 'styled-components';
import FlareCard from './FlareCard';
import GlowEffect from './GlowEffect';

const ToastViewport = styled(Toast.Viewport)({
  '--viewport-padding': '25px',
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: 'var(--viewport-padding)',
  gap: '10px',
  width: '390px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
});

const ToastRoot = styled(Toast.Root)(({ theme }) => ({
  backgroundColor: 'transparent',
  borderRadius: '4px',
  minWidth: '340px',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  "&[data-state='open']": {
    animation: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
  },
  "&[data-state='closed']": {
    animation: 'hide 100ms ease-in',
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
  '@keyframes hide': {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
  '@keyframes slideIn': {
    from: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
    to: { transform: 'translateX(0)' },
  },
  '@keyframes swipeOut': {
    from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
    to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
  },
  '& div': {
    width: '100%',
    height: '100%',
  },
}));

const MessageContent = styled('div')({
  minHeight: '80px',
  display: 'flex',
  padding: '4px 8px',
  height: '100%',
});

// ToastComponent
const ToastComponent = () => {
  return (
    <Toast.Provider>
      <ToastRoot open={true}>
        <GlowEffect $transparency={10}>
          <FlareCard $intensity={20} $borderRadius={4}>
            <MessageContent>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '8px 8px',
                  justifyContent: 'space-evenly',
                  alignItems: 'space-evenly',
                }}
              >
                <span style={{ fontSize: '16px' }}>Title</span>
                <span style={{ fontSize: '12px' }}>
                  You have found a secret! check your progesse here You have
                  found a secret! check your progesse here
                </span>
              </div>
              <button
                style={{
                  height: '30px',
                  justifySelf: 'center',
                  alignSelf: 'center',
                }}
              >
                teste
              </button>
            </MessageContent>
          </FlareCard>
        </GlowEffect>
      </ToastRoot>
      <ToastViewport />
    </Toast.Provider>
  );
};

export default ToastComponent;
