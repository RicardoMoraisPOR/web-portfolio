import { useCallback, useState } from 'react';

const useTouching = () => {
  const [isTouching, setIsTouching] = useState(false);

  const handleTouch = useCallback(
    (touchStart: boolean) => () => {
      setIsTouching(touchStart);
    },
    []
  );

  return {
    isTouching,
    handleTouch,
  };
};

export default useTouching;
