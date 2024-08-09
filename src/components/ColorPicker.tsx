import styled from 'styled-components';
import * as Popover from '@radix-ui/react-popover';
import { HexColorPicker } from 'react-colorful';
import { useCallback, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { isColorLight } from '../theme/AppThemeUtils';

const Button = styled.button<{ $color: string }>(({ theme, $color }) => {
  let isLight = !isColorLight($color);

  if (theme.isDarkTheme) {
    isLight = isColorLight($color);
  }

  return {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '10px',
    fontWeight: 'normal',
    padding: '8px 16px',
    background: 'transparent',
    border: 'none',
    outline: `1px solid ${theme.palette.text}`,
    backgroundColor: isLight ? theme.palette.background : theme.palette.text,
    color: isLight ? theme.palette.text : theme.palette.background,
    borderRadius: '4px',
    cursor: 'pointer',
  };
});

const PopoverContent = styled(Popover.Content)<{ $color: string }>(
  ({ $color, theme }) => ({
    '@keyframes slideUpAndFade': {
      '0%': {
        opacity: 0,
        transform: 'translateY(5px)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
    backgroundColor: isColorLight($color) ? 'black' : 'white',
    color: isColorLight($color) ? 'white' : 'black',
    borderRadius: '10px',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
    animationDuration: `${theme.transitions.fast}ms`,
    animationTimingFunction: 'ease',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="bottom"]': { animationName: 'slideUpAndFade' },
    },
  })
);

const ColorBlock = styled.div<{ color: string }>(({ color }) => ({
  height: '24px',
  width: '24px',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: color,
  '&:active': {
    transform: 'scale(1.05)',
  },
}));

const StyledHexColorPicker = styled(HexColorPicker)<{
  $hasChanged: boolean;
}>(({ $hasChanged, theme }) => ({
  '& .react-colorful__last-control': {
    transition: `border-radius ${theme.transitions.normal}ms ease`,
    borderRadius: $hasChanged ? '0px' : '0px 0px 8px 9px',
  },
}));

interface ColorPickerProps {
  title?: string;
  color: string;
  defaultColor: string;
  onColorChange?: (hex: string) => void;
}

const ColorPicker = ({
  onColorChange,
  color,
  title,
  defaultColor,
}: ColorPickerProps) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button $color={color}>
          <ColorBlock color={color} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              gap: '2px',
            }}
          >
            <span
              style={{ fontSize: '14px', lineHeight: 1, fontWeight: '600' }}
            >
              {title}
            </span>
            <span style={{ fontSize: '10px', lineHeight: 1, opacity: 0.5 }}>
              {color}
            </span>
          </div>
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <PopoverContent $color={defaultColor} sideOffset={10}>
          <StyledHexColorPicker
            color={color}
            onChange={onColorChange}
            $hasChanged={defaultColor !== color}
          />
          <DefaultResetComponent
            color={color}
            defaultColor={defaultColor}
            onColorChange={onColorChange}
          />
        </PopoverContent>
      </Popover.Portal>
    </Popover.Root>
  );
};

const DefaultResetComponent = ({
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
    <div ref={elementRef} style={{ display: 'flex', gap: '10px' }}>
      <ColorBlock color={defaultColor} onClick={applyDefault} />
      <span>Default</span>
    </div>
  );
};

export default ColorPicker;
