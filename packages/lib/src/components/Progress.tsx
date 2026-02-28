import { Progress as ProgressPrimitive } from '@ark-ui/solid/progress';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const ProgressView = ProgressPrimitive.View;
export const ProgressContext = ProgressPrimitive.Context;

export const ProgressCircle: Component<ProgressPrimitive.CircleProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ProgressPrimitive.Circle
      class={cn('h-10 w-10 text-primary', local.class)}
      data-slot='progress-circle'
      {...others}
    >
      {props.children}
    </ProgressPrimitive.Circle>
  );
};

export const ProgressCircleRange: Component<ProgressPrimitive.CircleRangeProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ProgressPrimitive.CircleRange
      class={cn('ease-in-out stroke-current transition-all duration-300', local.class)}
      data-slot='progress-circle-range'
      {...others}
    />
  );
};

export const ProgressCircleTrack: Component<ProgressPrimitive.CircleTrackProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ProgressPrimitive.CircleTrack
      class={cn('stroke-muted', local.class)}
      data-slot='progress-circle-track'
      {...others}
    />
  );
};

export const Progress: Component<ProgressPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);

  return (
    <ProgressPrimitive.Root
      data-slot='progress'
      class={cn('gap-2 flex w-full flex-col', local.class)}
      {...others}
    >
      {local.children}
    </ProgressPrimitive.Root>
  );
};

export const ProgressTrack: Component<ProgressPrimitive.TrackProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <ProgressPrimitive.Track
      class={cn(
        'h-2 relative flex w-full items-center overflow-x-hidden rounded-full bg-muted',
        local.class,
      )}
      data-slot='progress-track'
      {...others}
    >
      {local.children}
    </ProgressPrimitive.Track>
  );
};

export const ProgressIndicator: Component<ProgressPrimitive.RangeProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <ProgressPrimitive.Range
      data-slot='progress-indicator'
      class={cn('h-full bg-primary transition-all', local.class)}
      {...others}
    >
      {local.children}
    </ProgressPrimitive.Range>
  );
};

export const ProgressLabel: Component<ProgressPrimitive.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <ProgressPrimitive.Label
      data-slot='progress-label'
      class={cn(
        'gap-2 text-sm font-medium flex items-center leading-none select-none group-data-disabled:pointer-events-none group-data-disabled:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        'text-sm font-medium',
        local.class,
      )}
      {...others}
    />
  );
};

export const ProgressValue: Component<ProgressPrimitive.ValueTextProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ProgressPrimitive.ValueText
      class={cn('text-sm ml-auto text-muted-foreground tabular-nums', local.class)}
      data-slot='progress-value'
      {...others}
    />
  );
};
