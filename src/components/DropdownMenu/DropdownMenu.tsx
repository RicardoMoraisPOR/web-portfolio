import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FC, PropsWithChildren } from 'react';
import {
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  NoActionButton,
} from './dropdownMenu.styles';
import { DropdownMenuProps } from './dropdownMenu.types';

const DropdownMenuComponent: FC<PropsWithChildren<DropdownMenuProps>> = ({
  children,
  options,
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <NoActionButton>{children}</NoActionButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent sideOffset={5} align="end">
          <DropdownMenu.Group>
            {options.map((option) => (
              <DropdownMenuItem key={option.label} onSelect={option.onSelect}>
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenu.Group>

          <DropdownMenuArrow />
        </DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuComponent;
