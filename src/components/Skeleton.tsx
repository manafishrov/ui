import { type Component, type JSX, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const Skeleton: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='skeleton'
      class={cn('bg-muted rounded-md animate-pulse', local.class)}
      {...others}
    />
  );
};
