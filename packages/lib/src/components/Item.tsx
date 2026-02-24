import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn, tv, type VariantProps } from 'tailwind-variants';

import { Separator } from '@/components/Separator';

export const ItemGroup: Component<ComponentProps<'ul'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ul
      data-slot='item-group'
      class={cn(
        'gap-4 group/item-group flex w-full flex-col',
        'has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2',
        local.class,
      )}
      {...others}
    />
  );
};

export const ItemSeparator: Component<ComponentProps<typeof Separator>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <Separator
      data-slot='item-separator'
      orientation='horizontal'
      class={cn('my-2', local.class)}
      {...others}
    />
  );
};

export const itemVariants = tv({
  base: 'text-sm group/item flex w-full flex-wrap items-center rounded-lg border transition-colors duration-100 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [a]:transition-colors [a]:hover:bg-muted',
  variants: {
    variant: {
      default: 'border-transparent',
      outline: 'border-border',
      muted: 'border-transparent bg-muted/50',
    },
    size: {
      default: 'gap-2.5 px-3 py-2.5',
      sm: 'gap-2.5 px-3 py-2.5',
      xs: 'gap-2 px-2.5 py-2 data-[slot=dropdown-menu-content]:p-0',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export type ItemProps = ComponentProps<'div'> & VariantProps<typeof itemVariants>;

export const Item: Component<ItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'variant', 'size']);
  return (
    <div
      data-slot='item'
      data-variant={local.variant ?? 'default'}
      data-size={local.size ?? 'default'}
      class={itemVariants({ variant: local.variant, size: local.size, class: local.class })}
      {...others}
    />
  );
};

export const itemMediaVariants = tv({
  base: 'gap-2 group-has-[[data-slot=item-description]]/item:translate-y-0.5 flex shrink-0 items-center justify-center group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none',
  variants: {
    variant: {
      default: 'bg-transparent',
      icon: '[&_svg:not([class*="size-"])]:size-4',
      image:
        'size-10 group-data-[size=sm]/item:size-8 group-data-[size=xs]/item:size-6 overflow-hidden rounded-sm [&_img]:size-full [&_img]:object-cover',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type ItemMediaProps = ComponentProps<'div'> & VariantProps<typeof itemMediaVariants>;

export const ItemMedia: Component<ItemMediaProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'variant']);
  return (
    <div
      data-slot='item-media'
      data-variant={local.variant ?? 'default'}
      class={itemMediaVariants({ variant: local.variant, class: local.class })}
      {...others}
    />
  );
};

export const ItemContent: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='item-content'
      class={cn(
        'gap-1 [&+data-[slot=item-content]:flex-none group-data-[size=xs]/item:gap-0 flex flex-1 flex-col',
        local.class,
      )}
      {...others}
    />
  );
};

export const ItemTitle: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='item-title'
      class={cn(
        'gap-2 text-sm leading-snug font-medium line-clamp-1 flex w-fit items-center underline-offset-4',
        local.class,
      )}
      {...others}
    />
  );
};

export const ItemDescription: Component<ComponentProps<'p'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <p
      data-slot='item-description'
      class={cn(
        'text-sm leading-normal font-normal line-clamp-2 text-left text-muted-foreground',
        'group-data-[size=xs]/item:text-xs',
        '[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary',
        local.class,
      )}
      {...others}
    />
  );
};

export const ItemActions: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div data-slot='item-actions' class={cn('gap-2 flex items-center', local.class)} {...others} />
  );
};

export const ItemHeader: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='item-header'
      class={cn('gap-2 flex basis-full items-center justify-between', local.class)}
      {...others}
    />
  );
};

export const ItemFooter: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='item-footer'
      class={cn('gap-2 flex basis-full items-center justify-between', local.class)}
      {...others}
    />
  );
};
