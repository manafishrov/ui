import { Popover as PopoverPrimitive } from '@ark-ui/solid/popover';
import { splitProps, type Component, type ComponentProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;
export const PopoverIndicator = PopoverPrimitive.Indicator;
export const PopoverCloseTrigger = PopoverPrimitive.CloseTrigger;
export const PopoverContext = PopoverPrimitive.Context;

export const PopoverPositioner: Component<PopoverPrimitive.PositionerProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PopoverPrimitive.Positioner
      data-slot='popover-positioner'
      class={cn('isolate z-50', local.class)}
      {...others}
    />
  );
};

export const PopoverContent: Component<PopoverPrimitive.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PopoverPrimitive.Content
      data-slot='popover-content'
      class={cn(
        'p-2.5 text-sm shadow-md w-72 relative isolate z-50 origin-(--transform-origin) transform-gpu rounded-lg border border-foreground/10 bg-popover text-popover-foreground duration-100 will-change-transform outline-none [--arrow-background:var(--popover)]',
        "after:pointer-events-none after:absolute after:z-[60] after:rounded-full after:content-['']",
        'data-[placement^=bottom]:after:top-0 data-[placement^=bottom]:after:right-[0.17rem] data-[placement^=bottom]:after:left-[0.17rem] data-[placement^=bottom]:after:h-px data-[placement^=bottom]:after:bg-popover',
        'data-[placement^=top]:after:bottom-0 data-[placement^=top]:after:right-[0.17rem] data-[placement^=top]:after:left-[0.17rem] data-[placement^=top]:after:h-px data-[placement^=top]:after:bg-popover',
        'data-[placement^=left]:after:right-0 data-[placement^=left]:after:top-[0.17rem] data-[placement^=left]:after:bottom-[0.17rem] data-[placement^=left]:after:w-px data-[placement^=left]:after:bg-popover',
        'data-[placement^=right]:after:left-0 data-[placement^=right]:after:top-[0.17rem] data-[placement^=right]:after:bottom-[0.17rem] data-[placement^=right]:after:w-px data-[placement^=right]:after:bg-popover',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=top]:slide-in-from-bottom-2',
        'data-[side=inline-start]:slide-in-from-right-2',
        'data-[side=inline-end]:slide-in-from-left-2',
        'gap-2.5 flex flex-col',
        local.class,
      )}
      {...others}
    />
  );
};

export const PopoverArrow: Component<PopoverPrimitive.ArrowProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <PopoverPrimitive.Arrow
      data-slot='popover-arrow'
      class={cn('z-50 [--arrow-size:10px]', local.class)}
      {...others}
    >
      <PopoverPrimitive.ArrowTip class='rounded-[2px] border-t border-l border-foreground/10' />
    </PopoverPrimitive.Arrow>
  );
};

export const PopoverHeader: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='popover-header'
      class={cn('gap-0.5 text-sm flex flex-col', local.class)}
      {...others}
    />
  );
};

export const PopoverTitle: Component<PopoverPrimitive.TitleProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PopoverPrimitive.Title
      data-slot='popover-title'
      class={cn('font-medium', local.class)}
      {...others}
    />
  );
};

export const PopoverDescription: Component<PopoverPrimitive.DescriptionProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PopoverPrimitive.Description
      data-slot='popover-description'
      class={cn('text-muted-foreground', local.class)}
      {...others}
    />
  );
};
