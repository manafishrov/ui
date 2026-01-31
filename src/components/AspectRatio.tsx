import { type Component, type ComponentProps, type JSX, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const AspectRatio: Component<ComponentProps<'div'> & { ratio?: number }> = (props) => {
  const [local, others] = splitProps(props, ['class', 'ratio']);
  return (
    <div
      data-slot='aspect-ratio'
      style={{ '--ratio': local.ratio ?? 1 } as JSX.CSSProperties}
      class={cn('relative aspect-(--ratio)', local.class)}
      {...others}
    />
  );
};
