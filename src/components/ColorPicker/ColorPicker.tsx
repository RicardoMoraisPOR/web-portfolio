import * as Popover from '@radix-ui/react-popover';
import {
  Button,
  ColorBlock,
  ColorHex,
  ColorTitle,
  ColorTitleWrapper,
  PopoverContent,
  StyledHexColorPicker,
} from './colorPicker.styles';
import { ColorPickerProps } from './colorPicker.types';
import DefaultReset from './DefaultReset';

const ColorPicker = ({
  onColorChange,
  color,
  side,
  title,
  defaultColor,
}: ColorPickerProps) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button $color={color}>
          <ColorBlock color={color} />
          <ColorTitleWrapper>
            <ColorTitle>{title}</ColorTitle>
            <ColorHex>{color}</ColorHex>
          </ColorTitleWrapper>
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <PopoverContent
          $color={defaultColor}
          side={side}
          align="start"
          sideOffset={10}
        >
          <StyledHexColorPicker
            color={color}
            onChange={onColorChange}
            $hasChanged={defaultColor !== color}
          />
          <DefaultReset
            color={color}
            defaultColor={defaultColor}
            onColorChange={onColorChange}
          />
        </PopoverContent>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default ColorPicker;
