import { Swap as SwapPrimitive } from '@ark-ui/solid/swap';
import { splitProps, type Component } from 'solid-js';
import { cn } from 'tailwind-variants';

export const Swap: Component<SwapPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <SwapPrimitive.Root data-slot='swap' class={cn(local.class)} {...others} />;
};

export const SwapRootProvider = SwapPrimitive.RootProvider;

export const SwapIndicator: Component<SwapPrimitive.IndicatorProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SwapPrimitive.Indicator
      data-slot='swap-indicator'
      class={cn('inline-grid place-items-center', local.class)}
      {...others}
    />
  );
};
