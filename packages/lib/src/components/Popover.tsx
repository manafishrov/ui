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
        'p-2.5 text-sm shadow-md w-72 z-50 origin-(--transform-origin) rounded-lg bg-popover text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
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
      <PopoverPrimitive.ArrowTip class='border border-border bg-popover' />
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
