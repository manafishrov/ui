import { Tooltip as TooltipPrimitive } from '@ark-ui/solid/tooltip';
import { splitProps, type Component } from 'solid-js';
import { cn } from 'tailwind-variants';

export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipContext = TooltipPrimitive.Context;

export const TooltipPositioner: Component<TooltipPrimitive.PositionerProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <TooltipPrimitive.Positioner
      data-slot='tooltip-positioner'
      class={cn('isolate z-50', local.class)}
      {...others}
    />
  );
};

export const TooltipContent: Component<TooltipPrimitive.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <TooltipPrimitive.Content
      data-slot='tooltip-content'
      class={cn(
        'px-3 py-1.5 text-xs shadow-md relative isolate z-50 transform-gpu overflow-visible rounded-md bg-foreground text-background will-change-transform [--arrow-background:var(--foreground)]',
        'origin-(--transform-origin)',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
        'data-[placement^=bottom]:slide-in-from-top-2',
        'data-[placement^=left]:slide-in-from-right-2',
        'data-[placement^=right]:slide-in-from-left-2',
        'data-[placement^=top]:slide-in-from-bottom-2',
        local.class,
      )}
      {...others}
    />
  );
};

export const TooltipArrow: Component<TooltipPrimitive.ArrowProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <TooltipPrimitive.Arrow
      data-slot='tooltip-arrow'
      class={cn('z-50 [--arrow-offset:-6px]! [--arrow-size:10px]', local.class)}
      {...others}
    >
      <TooltipPrimitive.ArrowTip class='rounded-[2px]' />
    </TooltipPrimitive.Arrow>
  );
};
