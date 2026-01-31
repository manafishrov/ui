import { Progress as ProgressPrimitive } from '@ark-ui/solid/progress';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { Label } from '@/components/Label';

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
      class={cn('flex w-full flex-col gap-2', local.class)}
      {...others}
    />
  );
};

export const ProgressTrack: Component<ProgressPrimitive.TrackProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ProgressPrimitive.Track
      class={cn(
        'bg-muted h-2 rounded-full relative flex w-full items-center overflow-x-hidden',
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
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <ProgressPrimitive.Label
      asChild={(labelProps) => (
        <Label
          class={cn('text-sm font-medium', local.class)}
          data-slot='progress-label'
          {...labelProps()}
          {...others}
        >
          {local.children}
        </Label>
      )}
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
