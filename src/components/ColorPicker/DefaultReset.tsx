import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useCallback, useRef } from 'react';
import { ColorBlock, PickerWrapper } from './colorPicker.styles';
import { ColorPickerProps } from './colorPicker.types';

const DefaultReset = ({
  defaultColor,
  color,
  onColorChange,
}: Pick<ColorPickerProps, 'defaultColor' | 'onColorChange' | 'color'>) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const applyDefault = useCallback(() => {
    onColorChange?.(defaultColor);
  }, [defaultColor, onColorChange]);

  useGSAP(() => {
    if (elementRef.current) {
      if (defaultColor !== color) {
        gsap.set(elementRef.current, {
          opacity: 1,
          height: 45,
          padding: 10,
        });
        const items = elementRef.current.children;
        gsap.set(items, {
          opacity: 1,
          scale: 1,
        });
      } else {
        gsap.set(elementRef.current, { opacity: 0, height: 0, padding: 0 });
        const items = elementRef.current.children;
        gsap.set(items, { opacity: 0, scale: 0.8 });
      }
    }
  }, []);

  useGSAP(() => {
    if (elementRef.current && defaultColor !== color) {
      gsap.to(elementRef.current, {
        opacity: 1,
        duration: 0.3,
        height: 45,
        padding: 10,
        ease: 'power2.out',
      });
      const items = elementRef.current.children;
      gsap.to(items, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else if (elementRef.current && defaultColor === color) {
      gsap.to(elementRef.current, {
        opacity: 0,
        height: 0,
        padding: 0,
        duration: 0.3,
      });
      const items = elementRef.current.children;
      gsap.to(items, { opacity: 0, scale: 0.8, duration: 0.3 });
    }
  }, [defaultColor, color]);

  return (
    <PickerWrapper ref={elementRef}>
      <ColorBlock color={defaultColor} onClick={applyDefault} />
      <span>Default</span>
    </PickerWrapper>
  );
};

export default DefaultReset;
