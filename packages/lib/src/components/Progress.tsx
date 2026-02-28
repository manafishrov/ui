import { Progress as ProgressPrimitive } from '@ark-ui/solid/progress';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const ProgressCircle = ProgressPrimitive.Circle;
export const ProgressCircleRange = ProgressPrimitive.CircleRange;
export const ProgressCircleTrack = ProgressPrimitive.CircleTrack;
export const ProgressView = ProgressPrimitive.View;
export const ProgressContext = ProgressPrimitive.Context;

export const Progress: Component<ProgressPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <ProgressPrimitive.Root
      data-slot='progress'
      class={cn('gap-2 flex w-full flex-col', local.class)}
      {...others}
    />
  );
};

export const ProgressTrack: Component<ProgressPrimitive.TrackProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ProgressPrimitive.Track
      class={cn(
        'h-2 relative flex w-full items-center overflow-x-hidden rounded-full bg-muted',
        local.class,
      )}
      data-slot='progress-track'
      {...others}
    />
  );
};

export const ProgressIndicator: Component<ProgressPrimitive.RangeProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ProgressPrimitive.Range
      data-slot='progress-indicator'
      class={cn('h-full bg-primary transition-all', local.class)}
      {...others}
    />
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
