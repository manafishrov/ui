import { Slider as SliderPrimitive } from '@ark-ui/solid/slider';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { Label } from '@/components/Label';

export const Slider: Component<SliderPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SliderPrimitive.Root
      class={cn(
        'data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full flex flex-col',
        local.class,
      )}
      data-slot='slider'
      {...others}
    />
  );
};

export const SliderLabel: Component<SliderPrimitive.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SliderPrimitive.Label
      asChild={(labelProps) => (
        <Label
          {...labelProps()}
          class={cn('text-sm font-medium leading-none mb-2', local.class)}
          {...others}
        />
      )}
    />
  );
};

export const SliderValueText: Component<SliderPrimitive.ValueTextProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SliderPrimitive.ValueText
      class={cn('text-muted-foreground text-sm mb-2 tabular-nums', local.class)}
      {...others}
    />
  );
};

export const SliderControl: Component<SliderPrimitive.ControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SliderPrimitive.Control
      class={cn(
        'relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
        local.class,
      )}
      {...others}
    />
  );
};

export const SliderTrack: Component<SliderPrimitive.TrackProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SliderPrimitive.Track
      data-slot='slider-track'
      class={cn(
        'bg-muted relative grow overflow-hidden rounded-full select-none data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5',
        local.class,
      )}
      {...others}
    />
  );
};

export const SliderRange: Component<SliderPrimitive.RangeProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SliderPrimitive.Range
      data-slot='slider-range'
      class={cn(
        'bg-primary select-none data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full',
        local.class,
      )}
      {...others}
    />
  );
};

export const SliderThumb: Component<SliderPrimitive.ThumbProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <SliderPrimitive.Thumb
      data-slot='slider-thumb'
      class={cn(
        'border-ring ring-ring/50 relative block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] select-none after:absolute after:-inset-2 data-hover:ring-[3px] data-focus-visible:ring-[3px] focus-visible:outline-hidden data-active:ring-[3px] data-disabled:pointer-events-none data-disabled:opacity-50',
        local.class,
      )}
      {...others}
    >
      {local.children}
      <SliderPrimitive.HiddenInput />
    </SliderPrimitive.Thumb>
  );
};

export const SliderMarkerGroup: Component<SliderPrimitive.MarkerGroupProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <SliderPrimitive.MarkerGroup class={cn('mt-2', local.class)} {...others} />;
};

export const SliderMarker: Component<SliderPrimitive.MarkerProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SliderPrimitive.Marker
      class={cn(
        'text-muted-foreground text-[10px] data-[orientation=horizontal]:-translate-x-1/2 data-[orientation=vertical]:-translate-y-1/2 data-[state=at-value]:text-foreground data-[state=at-value]:font-medium',
        local.class,
      )}
      {...others}
    />
  );
};
