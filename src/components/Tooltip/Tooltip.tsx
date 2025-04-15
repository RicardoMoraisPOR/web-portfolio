import useMediaQuery from '@hooks/useMediaQuery';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import {
  FC,
  MouseEvent,
  PropsWithChildren,
  TouchEvent,
  useCallback,
  useState,
} from 'react';
import { Arrow, Content, NoActionButton } from './tooltip.styles';
import { TooltipProps } from './tooltip.types';

const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  children,
  name,
  tooltipContent,
  side = 'top',
}) => {
  const isMobile = useMediaQuery('max', 'mobile');
  const [open, setOpen] = useState(false);

  const onClickCallback = useCallback(() => {
    if (isMobile) setOpen((currentState) => !currentState);
  }, [isMobile]);

  const preventDefaultCallback = useCallback(
    (event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => {
      if (isMobile) {
        event.preventDefault(); // Prevent focus on mobile devices
      }
    },
    [isMobile]
  );

  return (
    <RadixTooltip.Provider delayDuration={200} disableHoverableContent>
      <RadixTooltip.Root open={open} onOpenChange={setOpen}>
        <RadixTooltip.Trigger asChild>
          <NoActionButton
            aria-label={name}
            onClick={onClickCallback}
            onMouseDown={preventDefaultCallback}
            onTouchStart={preventDefaultCallback}
          >
            {children}
          </NoActionButton>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <Content sideOffset={5} side={side}>
            {tooltipContent}
            <Arrow />
          </Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
