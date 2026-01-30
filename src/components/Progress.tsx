import { Progress as ProgressPrimitive } from '@ark-ui/solid/progress';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const ProgressCircle = ProgressPrimitive.Circle;
export const ProgressCircleRange = ProgressPrimitive.CircleRange;
export const ProgressCircleTrack = ProgressPrimitive.CircleTrack;
export const ProgressView = ProgressPrimitive.View;
export const ProgressContext = ProgressPrimitive.Context;

export const Progress: Component<ProgressPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children', 'value']);

  return (
    <ProgressPrimitive.Root
      value={local.value}
      data-slot='progress'
      class={cn('flex flex-wrap gap-3', local.class)}
      {...others}
    >
      {local.children}
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  );
};

export const ProgressTrack: Component<ProgressPrimitive.TrackProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ProgressPrimitive.Track
      class={cn(
        'bg-muted h-1 rounded-full relative flex w-full items-center overflow-x-hidden',
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
      class={cn('bg-primary h-full transition-all', local.class)}
      {...others}
    />
  );
};

export const ProgressLabel: Component<ProgressPrimitive.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ProgressPrimitive.Label
      class={cn('text-sm font-medium', local.class)}
      data-slot='progress-label'
      {...others}
    />
  );
};

export const ProgressValue: Component<ProgressPrimitive.ValueTextProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ProgressPrimitive.ValueText
      class={cn('text-muted-foreground ml-auto text-sm tabular-nums', local.class)}
      data-slot='progress-value'
      {...others}
    />
  );
};
