import { splitProps, type Component, type ComponentProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const Kbd: Component<ComponentProps<'kbd'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <kbd
      data-slot='kbd'
      class={cn(
        "h-5 min-w-5 gap-1 px-1 text-xs font-medium [&_svg:not([class*='size-'])]:size-3 pointer-events-none inline-flex w-fit items-center justify-center rounded-sm bg-muted font-sans text-muted-foreground select-none in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10",
        local.class,
      )}
      {...others}
    />
  );
};

export const KbdGroup: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='kbd-group'
      class={cn('gap-1 inline-flex items-center', local.class)}
      {...others}
    />
  );
};
