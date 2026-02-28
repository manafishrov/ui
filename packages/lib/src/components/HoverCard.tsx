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
        'p-4 text-sm shadow-md w-64 relative isolate z-50 origin-(--transform-origin) transform-gpu rounded-lg border border-border bg-popover text-popover-foreground duration-100 will-change-transform outline-none [--arrow-background:var(--popover)]',
        "after:pointer-events-none after:absolute after:z-[60] after:rounded-full after:content-['']",
        'data-[placement^=bottom]:after:top-0 data-[placement^=bottom]:after:left-[0.17rem] data-[placement^=bottom]:after:right-[0.17rem] data-[placement^=bottom]:after:h-px data-[placement^=bottom]:after:bg-popover',
        'data-[placement^=top]:after:bottom-0 data-[placement^=top]:after:left-[0.17rem] data-[placement^=top]:after:right-[0.17rem] data-[placement^=top]:after:h-px data-[placement^=top]:after:bg-popover',
        'data-[placement^=left]:after:top-[0.17rem] data-[placement^=left]:after:bottom-[0.17rem] data-[placement^=left]:after:right-0 data-[placement^=left]:after:w-px data-[placement^=left]:after:bg-popover',
        'data-[placement^=right]:after:top-[0.17rem] data-[placement^=right]:after:bottom-[0.17rem] data-[placement^=right]:after:left-0 data-[placement^=right]:after:w-px data-[placement^=right]:after:bg-popover',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
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
      <HoverCardPrimitive.ArrowTip class='rounded-[2px] border-t border-l border-border' />
    </HoverCardPrimitive.Arrow>
  );
};
