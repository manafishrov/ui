import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const Kbd: Component<ComponentProps<'kbd'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <kbd
      data-slot='kbd'
      class={cn(
        "bg-muted text-muted-foreground in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 h-5 w-fit min-w-5 gap-1 rounded-sm px-1 font-sans text-xs font-medium [&_svg:not([class*='size-'])]:size-3 pointer-events-none inline-flex items-center justify-center select-none",
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
