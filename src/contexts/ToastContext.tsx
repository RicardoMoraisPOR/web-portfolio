import {
  createContext,
  useState,
  useCallback,
  PropsWithChildren,
  FC,
} from 'react';
import ToastComponent from '../components/ToastComponent';
import ConfettiEffect from '../components/ConfettiEffect';

export interface ToastComponentProps {
  open: boolean;
  onClose: () => void;

  message?: string;
  title?: string;
  actionText?: string;
  action?: () => void;
}

interface ToastContextType {
  showToast: (
    props: NonNullable<Omit<ToastComponentProps, 'open' | 'onClose'>>
  ) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toastProps, setToastProps] = useState<Omit<
    ToastComponentProps,
    'onClose'
  > | null>(null);
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const closeToast = useCallback(() => {
    setToastProps((oldProps) => {
      if (oldProps) {
        return { ...oldProps, open: false };
      }
      return oldProps;
    });
    setTimeout(() => {
      setToastProps(null);
    }, 1000);
  }, []);

  const showToast = useCallback<ToastContextType['showToast']>(
    (props) => {
      setToastProps({ ...props, open: true });
      setTimeout(() => {
        closeToast();
      }, 4000);

      //confetti
      setIsConfettiActive(true);
      setTimeout(() => {
        setIsConfettiActive(false);
      }, 4000);
    },
    [closeToast]
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {isConfettiActive && <ConfettiEffect />}
      <ToastComponent open={false} onClose={closeToast} {...toastProps} />
    </ToastContext.Provider>
  );
};

export default ToastContext;
