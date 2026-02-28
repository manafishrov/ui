import { Marquee as MarqueePrimitive } from '@ark-ui/solid/marquee';
import { splitProps, type Component } from 'solid-js';
import { cn } from 'tailwind-variants';

export const Marquee = MarqueePrimitive.Root;
export const MarqueeContext = MarqueePrimitive.Context;

export const MarqueeViewport: Component<MarqueePrimitive.ViewportProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <MarqueePrimitive.Viewport class={cn('overflow-hidden', local.class)} {...others} />;
};

export const MarqueeContent = MarqueePrimitive.Content;

export const MarqueeItem: Component<MarqueePrimitive.ItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <MarqueePrimitive.Item class={cn('flex shrink-0 items-center', local.class)} {...others} />
  );
};

export const MarqueeEdge: Component<MarqueePrimitive.EdgeProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <MarqueePrimitive.Edge
      class={cn(
        'inset-y-0 w-20 absolute z-10 bg-linear-to-r from-background from-0% via-background via-50% to-transparent to-100%',
        local.class,
      )}
      {...others}
    />
  );
};
