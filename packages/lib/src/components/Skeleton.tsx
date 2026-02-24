import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import * as messages from '@/paraglide/messages';

export const Skeleton: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  

  return (
    <div
      data-slot='skeleton'
      role='progressbar'
      aria-busy='true'
      aria-label={messages.ui_skeleton_loading()}
      class={cn('animate-pulse rounded-md bg-muted', local.class)}
      {...others}
    />
  );
};
