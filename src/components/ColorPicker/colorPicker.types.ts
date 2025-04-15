import * as Popover from '@radix-ui/react-popover';

export interface ColorPickerProps {
  title?: string;
  side: Popover.PopoverContentProps['side'];
  color: string;
  defaultColor: string;
  onColorChange?: (hex: string) => void;
}
