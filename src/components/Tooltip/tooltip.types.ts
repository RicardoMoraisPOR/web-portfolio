import { ReactNode } from 'react';

export interface TooltipProps {
  tooltipContent: ReactNode;
  side?: 'left' | 'right' | 'bottom' | 'top';
  name: string;
}
