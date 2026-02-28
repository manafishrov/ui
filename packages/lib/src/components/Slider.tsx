import { AngleSlider as AngleSliderPrimitive } from '@ark-ui/solid/angle-slider';
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
        'size-4 bg-white shadow-sm after:-inset-2 relative block shrink-0 rounded-full border border-ring ring-ring/50 transition-[color,box-shadow] select-none after:absolute hover:ring-[3px] focus-visible:outline-hidden data-active:ring-[3px] data-disabled:pointer-events-none data-disabled:opacity-50 data-focus-visible:ring-[3px]',
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

export const SliderCircle: Component<AngleSliderPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <AngleSliderPrimitive.Root
      class={cn('gap-4 flex flex-col items-center', local.class)}
      data-slot='slider-circle'
      {...others}
    >
      {local.children}
    </AngleSliderPrimitive.Root>
  );
};

export const SliderCircleTrack: Component<AngleSliderPrimitive.ControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <AngleSliderPrimitive.Control
      class={cn(
        'size-24 relative flex items-center justify-center rounded-full bg-muted select-none data-disabled:opacity-50 data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50',
        local.class,
      )}
      data-slot='slider-circle-track'
      {...others}
    />
  );
};

export const SliderCircleRange: Component<AngleSliderPrimitive.ThumbProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <AngleSliderPrimitive.Thumb
      class={cn(
        'top-0 bottom-0 w-0.5 absolute left-1/2 -translate-x-1/2 outline-none',
        'after:w-1 after:h-10 after:absolute after:bottom-1/2 after:left-1/2 after:-translate-x-1/2 after:rounded-full after:bg-primary',
        'data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50',
        local.class,
      )}
      data-slot='slider-circle-range'
      {...others}
    >
      {local.children}
    </AngleSliderPrimitive.Thumb>
  );
};

export const SliderCircleThumb: Component<AngleSliderPrimitive.ThumbProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <AngleSliderPrimitive.Thumb
      class={cn(
        'top-0 bottom-0 w-0.5 absolute left-1/2 -translate-x-1/2 outline-none',
        'before:top-1 before:size-4 before:bg-white before:shadow-sm before:absolute before:left-1/2 before:-translate-x-1/2 before:rounded-full before:border before:border-ring before:transition-[color,box-shadow] before:data-active:ring-[3px] before:data-active:ring-ring/50',
        'data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50',
        local.class,
      )}
data-slot='slider-circle-thumb'
{...others}
>
{local.children}
<AngleSliderPrimitive.HiddenInput />
</AngleSliderPrimitive.Thumb>
);
};

export const SliderCircleMarkerGroup: Component<AngleSliderPrimitive.MarkerGroupProps> = (
  props,
) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <AngleSliderPrimitive.MarkerGroup
      class={cn('inset-0 pointer-events-none absolute rounded-full', local.class)}
      {...others}
    >
      {local.children}
    </AngleSliderPrimitive.MarkerGroup>
  );
};

export const SliderCircleMarker: Component<AngleSliderPrimitive.MarkerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <AngleSliderPrimitive.Marker
      class={cn(
        'top-0 bottom-0 w-0.5 absolute left-1/2 -translate-x-1/2',
        'before:top-2 before:w-0.5 before:h-1.5 before:absolute before:left-1/2 before:-translate-x-1/2 before:rounded-full before:bg-border',
        'data-[state=at-value]:before:bg-primary data-[state=under-value]:before:bg-primary/50',
        local.class,
      )}
      {...others}
    >
      {local.children}
    </AngleSliderPrimitive.Marker>
  );
};
