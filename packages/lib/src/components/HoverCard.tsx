import { HoverCard as HoverCardPrimitive } from '@ark-ui/solid/hover-card';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;
export const HoverCardContext = HoverCardPrimitive.Context;

export const HoverCardPositioner: Component<HoverCardPrimitive.PositionerProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <HoverCardPrimitive.Positioner
      data-slot='hover-card-positioner'
      class={cn('isolate z-50', local.class)}
      {...others}
    />
  );
};

export const HoverCardContent: Component<HoverCardPrimitive.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <HoverCardPrimitive.Content
      data-slot='hover-card-content'
      class={cn(
        'p-4 text-sm shadow-md w-64 z-50 origin-(--transform-origin) rounded-lg bg-popover text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=top]:slide-in-from-bottom-2',
        local.class,
      )}
      {...others}
    />
  );
};

export const HoverCardArrow: Component<HoverCardPrimitive.ArrowProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <HoverCardPrimitive.Arrow
      data-slot='hover-card-arrow'
      class={cn('z-50 [--arrow-size:10px]', local.class)}
      {...others}
    >
      <HoverCardPrimitive.ArrowTip class='border border-border bg-popover' />
    </HoverCardPrimitive.Arrow>
  );
};
