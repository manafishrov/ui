import { Popover as PopoverPrimitive } from '@ark-ui/solid/popover';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { Portal } from 'solid-js/web';
import { cn } from 'tailwind-variants';

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;
export const PopoverIndicator = PopoverPrimitive.Indicator;
export const PopoverCloseTrigger = PopoverPrimitive.CloseTrigger;

export const PopoverContent: Component<PopoverPrimitive.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <Portal>
      <PopoverPrimitive.Positioner class='isolate z-50'>
        <PopoverPrimitive.Content
          data-slot='popover-content'
          class={cn(
            'bg-popover text-popover-foreground rounded-lg p-2.5 text-sm shadow-md ring-1 ring-foreground/10 z-50 w-72 origin-(--transform-origin) outline-none duration-100',
            'data-state-open:animate-in data-state-open:fade-in-0 data-state-open:zoom-in-95',
            'data-state-closed:animate-out data-state-closed:fade-out-0 data-state-closed:zoom-out-95',
            'data-side-bottom:slide-in-from-top-2',
            'data-side-left:slide-in-from-right-2',
            'data-side-right:slide-in-from-left-2',
            'data-side-top:slide-in-from-bottom-2',
            'data-side-inline-start:slide-in-from-right-2',
            'data-side-inline-end:slide-in-from-left-2',
            'flex flex-col gap-2.5',
            local.class,
          )}
          {...others}
        >
          {local.children}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Positioner>
    </Portal>
  );
};

export const PopoverArrow: Component<PopoverPrimitive.ArrowProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PopoverPrimitive.Arrow class={cn('z-50 [--arrow-size:10px]', local.class)} {...others}>
      <PopoverPrimitive.ArrowTip class='bg-popover border-border border' />
    </PopoverPrimitive.Arrow>
  );
};

export const PopoverHeader: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='popover-header'
      class={cn('flex flex-col gap-0.5 text-sm', local.class)}
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
