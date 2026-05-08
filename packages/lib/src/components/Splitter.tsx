import { Splitter as SplitterPrimitive } from '@ark-ui/solid/splitter';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const Splitter: Component<SplitterPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <SplitterPrimitive.Root
      data-slot='splitter'
      class={cn('flex h-full w-full data-[orientation=vertical]:flex-col', local.class)}
      {...others}
    />
  );
};

export const SplitterPanel: Component<SplitterPrimitive.PanelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <SplitterPrimitive.Panel data-slot='splitter-panel' class={cn(local.class)} {...others} />;
};

export type SplitterResizeTriggerProps = SplitterPrimitive.ResizeTriggerProps & {
  withHandle?: boolean;
};

export const SplitterResizeTrigger: Component<SplitterResizeTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'withHandle']);
  return (
    <SplitterPrimitive.ResizeTrigger
      data-slot='splitter-resize-trigger'
      class={cn(
        'relative flex w-px items-center justify-center bg-border ring-offset-background',
        "after:inset-y-0 after:w-1 after:absolute after:left-1/2 after:-translate-x-1/2 after:content-['']",
        'focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden',
        'data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full',
        'data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:top-1/2',
        'data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full',
        'data-[orientation=vertical]:after:translate-x-0 data-[orientation=vertical]:after:-translate-y-1/2',
        '[&[data-orientation=vertical]>div]:rotate-90',
        local.class,
      )}
      {...others}
    >
      {local.withHandle === true && <div class='h-6 w-1 z-10 flex shrink-0 rounded-lg bg-border' />}
    </SplitterPrimitive.ResizeTrigger>
  );
};
