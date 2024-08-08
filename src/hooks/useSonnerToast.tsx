import { useCallback, useMemo, useState } from 'react';
import { ExternalToast, toast } from 'sonner';
import ConfettiEffect from '../components/ConfettiEffect';

const useToast = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const callToast = useCallback(
    (message: string | React.ReactNode, data?: ExternalToast) => {
      toast(message, { ...data });
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 4000);
    },
    []
  );

  const confetti = useMemo(() => {
    return showConfetti ? <ConfettiEffect /> : null;
  }, [showConfetti]);

  return {
    callToast,
    confetti,
  };
};

export default useToast;
