import { Marquee as MarqueePrimitive } from '@ark-ui/solid/marquee';
import { type Component, splitProps } from 'solid-js';
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
        'bg-linear-to-r from-background via-background to-transparent absolute inset-y-0 z-10 w-20 from-0% via-50% to-100%',
        local.class,
      )}
      {...others}
    />
  );
};
