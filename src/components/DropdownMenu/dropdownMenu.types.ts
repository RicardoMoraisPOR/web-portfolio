export interface DropdownMenuProps {
  options: Array<{
    label: string;
    onSelect: () => void;
  }>;
}
