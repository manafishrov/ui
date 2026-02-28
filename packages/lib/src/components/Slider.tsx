import { Slider as SliderPrimitive } from '@ark-ui/solid/slider';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const Slider: Component<SliderPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SliderPrimitive.Root
      class={cn(
        'flex flex-col data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full',
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
      class={cn(
        'text-sm font-medium mb-2 leading-none',
        'gap-2 text-sm font-medium flex items-center leading-none select-none group-data-disabled:pointer-events-none group-data-disabled:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        local.class,
      )}
      {...others}
    />
  );
};

export const SliderValueText: Component<SliderPrimitive.ValueTextProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SliderPrimitive.ValueText
      class={cn('text-sm mb-2 text-muted-foreground tabular-nums', local.class)}
      {...others}
    />
  );
};

export const SliderControl: Component<SliderPrimitive.ControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SliderPrimitive.Control
      class={cn(
        'data-[orientation=vertical]:min-h-40 relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
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
        'data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:w-1.5 relative grow overflow-hidden rounded-full bg-muted select-none data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full',
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
        'size-4 bg-white shadow-sm after:-inset-2 relative block shrink-0 rounded-full border border-ring ring-ring/50 transition-[color,box-shadow] select-none after:absolute focus-visible:outline-hidden data-active:ring-[3px] data-disabled:pointer-events-none data-disabled:opacity-50 data-focus-visible:ring-[3px] hover:ring-[3px]',
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
        'data-[state=at-value]:font-medium text-[10px] text-muted-foreground data-[orientation=horizontal]:-translate-x-1/2 data-[orientation=vertical]:-translate-y-1/2 data-[state=at-value]:text-foreground',
        local.class,
      )}
      {...others}
    />
  );
};
