import { Tooltip as TooltipPrimitive } from '@ark-ui/solid/tooltip';
import { type Component, splitProps } from 'solid-js';
import { Portal } from 'solid-js/web';
import { cn } from 'tailwind-variants';

export const Tooltip = TooltipPrimitive.Root;
export const TooltipContext = TooltipPrimitive.Context;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipPositioner = TooltipPrimitive.Positioner;
export const TooltipArrowTip = TooltipPrimitive.ArrowTip;

export const TooltipContent: Component<TooltipPrimitive.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);

  return (
    <Portal>
      <TooltipPrimitive.Positioner>
        <TooltipPrimitive.Content
          class={cn(
            'z-50 overflow-hidden rounded-md bg-foreground px-3 py-1.5 text-xs text-background shadow-md',
            'origin-(--transform-origin)',
            'data-state-open:animate-in data-state-open:fade-in-0 data-state-open:zoom-in-95',
            'data-state-closed:animate-out data-state-closed:fade-out-0 data-state-closed:zoom-out-95',
            'data-placement-bottom:slide-in-from-top-2',
            'data-placement-left:slide-in-from-right-2',
            'data-placement-right:slide-in-from-left-2',
            'data-placement-top:slide-in-from-bottom-2',
            local.class,
          )}
          {...others}
        >
          {local.children}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Positioner>
    </Portal>
  );
};

export const TooltipArrow: Component<TooltipPrimitive.ArrowProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <TooltipPrimitive.Arrow class={cn('z-50 [--arrow-size:10px]', local.class)} {...others}>
      <TooltipPrimitive.ArrowTip class='bg-foreground border-none' />
    </TooltipPrimitive.Arrow>
  );
};
