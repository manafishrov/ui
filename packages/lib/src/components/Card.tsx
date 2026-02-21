import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export type CardProps = ComponentProps<'div'> & {
  size?: 'default' | 'sm';
};

export const Card: Component<CardProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'size']);

  return (
    <div
      data-slot='card'
      data-size={local.size ?? 'default'}
      class={cn(
        'ring-foreground/10 bg-card text-card-foreground gap-4 overflow-hidden rounded-xl py-4 text-sm ring-1 group/card flex flex-col',
        'has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0',
        'data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0',
        '*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl',
        local.class,
      )}
      {...others}
    />
  );
};

export const CardHeader: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='card-header'
      class={cn(
        'gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]grid-rows-[auto_auto]',
        local.class,
      )}
      {...others}
    />
  );
};

export const CardTitle: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='card-title'
      class={cn(
        'text-base font-medium leading-snug group-data-[size=sm]/card:text-sm',
        local.class,
      )}
      {...others}
    />
  );
};

export const CardDescription: Component<ComponentProps<'p'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <p
      data-slot='card-description'
      class={cn('text-muted-foreground text-sm', local.class)}
      {...others}
    />
  );
};

export const CardAction: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='card-action'
      class={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', local.class)}
      {...others}
    />
  );
};

export const CardContent: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='card-content'
      class={cn('px-4 group-data-[size=sm]/card:px-3', local.class)}
      {...others}
    />
  );
};

export const CardFooter: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='card-footer'
      class={cn(
        'bg-muted/50 flex items-center rounded-b-xl border-t p-4 group-data-[size=sm]/card:p-3',
        local.class,
      )}
      {...others}
    />
  );
};
