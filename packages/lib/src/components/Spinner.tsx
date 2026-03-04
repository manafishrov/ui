import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';
import ProgressActivityIcon from '~icons/material-symbols/progress-activity';

import * as messages from '@/paraglide/messages';

export const Spinner: Component<ComponentProps<'span'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <span
      role='status'
      aria-label={messages.ui_common_loading()}
      class={cn('inline-flex items-center justify-center', local.class)}
      {...others}
    >
      <ProgressActivityIcon class='size-4 animate-spin' aria-hidden='true' />
    </span>
  );
};
