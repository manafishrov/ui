import { AngleSlider as AngleSliderPrimitive } from '@ark-ui/solid/angle-slider';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const AngleSlider: Component<AngleSliderPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <AngleSliderPrimitive.Root
      class={cn('inline-flex flex-col items-center gap-4', local.class)}
      data-slot='angle-slider'
      {...others}
    >
      {local.children}
    </AngleSliderPrimitive.Root>
  );
};

export const AngleSliderLabel: Component<AngleSliderPrimitive.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <AngleSliderPrimitive.Label
      class={cn(
        'text-sm font-medium uppercase tracking-wide text-muted-foreground select-none data-disabled:opacity-50',
        local.class,
      )}
      {...others}
    >
      {local.children}
    </AngleSliderPrimitive.Label>
  );
};

export const AngleSliderControl: Component<AngleSliderPrimitive.ControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <AngleSliderPrimitive.Control
      class={cn(
        'relative size-24 rounded-full bg-muted shadow-[inset_0_2px_4px_rgba(0,0,0,0.06),0_4px_12px_-4px_rgba(0,0,0,0.1)] flex items-center justify-center select-none data-disabled:opacity-50 data-disabled:grayscale data-focus:ring-[3px] data-focus:ring-ring/50',
        // Inner circle
        'before:absolute before:inset-1 before:rounded-full before:bg-background before:shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)]',
        // Center dot
        'after:absolute after:size-1.5 after:rounded-full after:bg-muted-foreground',
        local.class,
      )}
      {...others}
    >
      {local.children}
    </AngleSliderPrimitive.Control>
  );
};

export const AngleSliderThumb: Component<AngleSliderPrimitive.ThumbProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <AngleSliderPrimitive.Thumb
      class={cn(
        'absolute top-0 bottom-0 left-1/2 w-0.5 -translate-x-1/2 outline-none',
        // Thumb indicator at top
        'before:absolute before:left-1/2 before:top-1 before:-translate-x-1/2 before:size-2.5 before:rounded-full before:bg-primary before:border-2 before:border-background before:shadow-sm before:transition-transform before:data-active:scale-110',
        // Line from center
        'after:absolute after:left-1/2 after:top-4 after:-translate-x-1/2 after:w-0.5 after:h-8 after:bg-gradient-to-b after:from-primary after:to-transparent after:rounded-full',
        'data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50',
        local.class,
      )}
      {...others}
    >
      {local.children}
    </AngleSliderPrimitive.Thumb>
  );
};

export const AngleSliderMarkerGroup: Component<AngleSliderPrimitive.MarkerGroupProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <AngleSliderPrimitive.MarkerGroup
      class={cn('absolute inset-0 rounded-full pointer-events-none', local.class)}
      {...others}
    >
      {local.children}
    </AngleSliderPrimitive.MarkerGroup>
  );
};

export const AngleSliderMarker: Component<AngleSliderPrimitive.MarkerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <AngleSliderPrimitive.Marker
      class={cn(
        'absolute top-0 bottom-0 w-0.5 left-1/2 -translate-x-1/2',
        // Tick mark
        'before:absolute before:left-1/2 before:top-1.5 before:-translate-x-1/2 before:w-0.5 before:h-1.5 before:bg-border before:rounded-full',
        'data-[state=at-value]:before:bg-primary data-[state=under-value]:before:bg-primary/50',
        local.class,
      )}
      {...others}
    >
      {local.children}
    </AngleSliderPrimitive.Marker>
  );
};

export const AngleSliderValueText: Component<AngleSliderPrimitive.ValueTextProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <AngleSliderPrimitive.ValueText
      class={cn('text-xl font-semibold tabular-nums', local.class)}
      {...others}
    >
      {local.children}
    </AngleSliderPrimitive.ValueText>
  );
};

export const AngleSliderHiddenInput = AngleSliderPrimitive.HiddenInput;
