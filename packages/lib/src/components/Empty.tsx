import type { Component, ComponentProps } from 'solid-js';
import { cn, tv, type VariantProps } from 'tailwind-variants';

export const Empty: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='empty'
      class={cn(
        'gap-4 p-6 min-w-0 flex w-full flex-1 flex-col items-center justify-center rounded-lg border border-dashed text-center text-balance',
        local.class,
      )}
      {...others}
    />
  );
};

export const EmptyHeader: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='empty-header'
      class={cn('gap-2 max-w-sm flex flex-col items-center', local.class)}
      {...others}
    />
  );
};

export const emptyMediaVariants = tv({
  base: 'mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0',
  variants: {
    variant: {
      default: 'bg-transparent',
      icon: 'size-8 [&_svg:not([class*="size-"])]:size-4 flex shrink-0 items-center justify-center rounded-lg bg-muted text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type EmptyMediaProps = ComponentProps<'div'> & VariantProps<typeof emptyMediaVariants>;

export const EmptyMedia: Component<EmptyMediaProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'variant']);
  return (
    <div
      data-slot='empty-icon'
      data-variant={local.variant ?? 'default'}
      class={emptyMediaVariants({ variant: local.variant, class: local.class })}
      {...others}
    />
  );
};

export const EmptyTitle: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='empty-title'
      class={cn('text-sm font-medium tracking-tight', local.class)}
      {...others}
    />
  );
};

export const EmptyDescription: Component<ComponentProps<'p'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <p
      data-slot='empty-description'
      class={cn(
        'text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary',
        local.class,
      )}
      {...others}
    />
  );
};

export const EmptyContent: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='empty-content'
      class={cn(
        'gap-2.5 text-sm max-w-sm min-w-0 flex w-full flex-col items-center text-balance',
        local.class,
      )}
      {...others}
    />
  );
};
