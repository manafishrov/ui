import { ScrollArea as ScrollAreaPrimitive } from '@ark-ui/solid/scroll-area';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const ScrollArea = ScrollAreaPrimitive.Root;

export const ScrollAreaViewport: Component<ScrollAreaPrimitive.ViewportProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ScrollAreaPrimitive.Viewport
      data-slot='scroll-area-viewport'
      class={cn(
        'focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1',
        local.class,
      )}
      {...others}
    />
  );
};

export const ScrollAreaContent: Component<ScrollAreaPrimitive.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ScrollAreaPrimitive.Content
      data-slot='scroll-area-content'
      class={cn(local.class)}
      {...others}
    />
  );
};

export const ScrollAreaScrollbar: Component<ScrollAreaPrimitive.ScrollbarProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'orientation']);
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot='scroll-area-scrollbar'
      class={cn(
        'flex touch-none p-px transition-colors select-none',
        'data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent',
        'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2.5 data-[orientation=vertical]:border-l data-[orientation=vertical]:border-l-transparent',
        local.class,
      )}
      {...others}
    />
  );
};

export const ScrollAreaThumb: Component<ScrollAreaPrimitive.ThumbProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ScrollAreaPrimitive.Thumb
      data-slot='scroll-area-thumb'
      class={cn('bg-border relative flex-1 rounded-full', local.class)}
      {...others}
    />
  );
};

export const ScrollAreaCorner: Component<ScrollAreaPrimitive.CornerProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ScrollAreaPrimitive.Corner
      data-slot='scroll-area-corner'
      class={cn(local.class)}
      {...others}
    />
  );
};
