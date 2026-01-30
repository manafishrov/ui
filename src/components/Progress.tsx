import { Progress as ProgressPrimitive } from '@ark-ui/solid/progress';
import { type ComponentProps, type JSX, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export type ProgressProps = ComponentProps<typeof ProgressPrimitive.Root>;

export const Progress = (props: ProgressProps): JSX.Element => {
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

export const ProgressTrack = (
  props: ComponentProps<typeof ProgressPrimitive.Track>,
): JSX.Element => {
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

export const ProgressIndicator = (
  props: ComponentProps<typeof ProgressPrimitive.Range>,
): JSX.Element => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ProgressPrimitive.Range
      data-slot='progress-indicator'
      class={cn('bg-primary h-full transition-all', local.class)}
      {...others}
    />
  );
};

export const ProgressLabel = (
  props: ComponentProps<typeof ProgressPrimitive.Label>,
): JSX.Element => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ProgressPrimitive.Label
      class={cn('text-sm font-medium', local.class)}
      data-slot='progress-label'
      {...others}
    />
  );
};

export const ProgressValue = (
  props: ComponentProps<typeof ProgressPrimitive.ValueText>,
): JSX.Element => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ProgressPrimitive.ValueText
      class={cn('text-muted-foreground ml-auto text-sm tabular-nums', local.class)}
      data-slot='progress-value'
      {...others}
    />
  );
};
