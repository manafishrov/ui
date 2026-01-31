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
  base: '[a]:hover:bg-muted rounded-lg border text-sm w-full group/item focus-visible:border-ring focus-visible:ring-ring/50 flex items-center flex-wrap outline-none transition-colors duration-100 focus-visible:ring-[3px] [a]:transition-colors',
  variants: {
    variant: {
      default: 'border-transparent',
      outline: 'border-border',
      muted: 'bg-muted/50 border-transparent',
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
  base: 'gap-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 group-has-[[data-slot=item-description]]/item:self-start',
  variants: {
    variant: {
      default: 'bg-transparent',
      icon: '[&_svg:not([class*="size-"])]:size-4',
      image:
        'size-10 overflow-hidden rounded-sm group-data-[size=sm]/item:size-8 group-data-[size=xs]/item:size-6 [&_img]:size-full [&_img]:object-cover',
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
        'gap-1 flex flex-1 flex-col [&+data-[slot=item-content]:flex-none group-data-[size=xs]/item:gap-0',
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
        'gap-2 text-sm leading-snug font-medium underline-offset-4 line-clamp-1 flex w-fit items-center',
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
        'text-muted-foreground text-left text-sm leading-normal font-normal line-clamp-2',
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
