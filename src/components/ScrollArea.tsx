import { ScrollArea as ScrollAreaPrimitive } from '@ark-ui/solid/scroll-area';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const ScrollBar: Component<ScrollAreaPrimitive.ScrollbarProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'orientation']);
  const orientation = local.orientation ?? 'vertical';

  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot='scroll-area-scrollbar'
      orientation={orientation}
      class={cn(
        'flex touch-none p-px transition-colors select-none',
        orientation === 'horizontal' &&
          'h-2.5 flex-col border-t border-t-transparent data-[orientation=horizontal]:h-2.5',
        orientation === 'vertical' &&
          'h-full w-2.5 border-l border-l-transparent data-[orientation=vertical]:w-2.5',
        local.class,
      )}
      {...others}
    >
      <ScrollAreaPrimitive.Thumb
        data-slot='scroll-area-thumb'
        class='bg-border relative flex-1 rounded-full'
      />
    </ScrollAreaPrimitive.Scrollbar>
  );
};

export const ScrollArea: Component<ScrollAreaPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <ScrollAreaPrimitive.Root
      data-slot='scroll-area'
      class={cn('relative', local.class)}
      {...others}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot='scroll-area-viewport'
        class='focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1'
      >
        <ScrollAreaPrimitive.Content data-slot='scroll-area-content'>
          {local.children}
        </ScrollAreaPrimitive.Content>
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar orientation='vertical' />
      <ScrollBar orientation='horizontal' />
      <ScrollAreaPrimitive.Corner data-slot='scroll-area-corner' />
    </ScrollAreaPrimitive.Root>
  );
};
