import useTouching from '@hooks/useIsTouching';
import { noop } from 'lodash';
import {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FlareCardComponent, InnerContainer } from './flareCard.styles';
import { FlareCardCoordinatesProps, FlareCardProps } from './flareCard.types';

const FlareCard: FC<PropsWithChildren<FlareCardProps>> = ({
  children,
  $disableTouch,
  ...props
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [mouseCoordinates, setMouseCoordinates] =
    useState<Pick<FlareCardCoordinatesProps, '$x' | '$y'>>();
  const { isTouching, handleTouch } = useTouching();

  const handleMouseMove = useCallback<MouseEventHandler<HTMLDivElement>>(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();

      setMouseCoordinates({
        $x: e.clientX - rect.left,
        $y: e.clientY - rect.top,
      });
    },
    []
  );

  const handleTouchMove = useCallback((e: TouchEvent) => {
    // Prevent the window from scrolling
    e.preventDefault();

    const touch = e?.touches?.[0]; // Get the first touch point
    const rect = elementRef?.current?.getBoundingClientRect();

    setMouseCoordinates({
      $x: touch.clientX - (rect?.left ?? 0),
      $y: touch.clientY - (rect?.top ?? 0),
    });
  }, []);

  useEffect(() => {
    const element = elementRef.current;

    if (element && !$disableTouch) {
      element.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });

      return () => {
        element.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [$disableTouch, handleTouchMove]);

  return (
    <FlareCardComponent
      ref={elementRef}
      {...mouseCoordinates}
      {...props}
      $isTouching={isTouching}
      onMouseMove={handleMouseMove}
      onTouchStart={$disableTouch ? noop : handleTouch(true)}
      onTouchEnd={$disableTouch ? noop : handleTouch(false)}
      onTouchCancel={$disableTouch ? noop : handleTouch(false)}
    >
      <InnerContainer>{children}</InnerContainer>
    </FlareCardComponent>
  );
};

export default FlareCard;
