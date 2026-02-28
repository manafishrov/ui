import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import * as messages from '@/paraglide/messages';

export const Spinner: Component<ComponentProps<typeof IconIcOutlineRefresh>> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <IconIcOutlineRefresh
      role='status'
      aria-label={messages.ui_common_loading()}
      class={cn('size-4 animate-spin shrink-0', local.class)}
      {...others}
    />
  );
};
