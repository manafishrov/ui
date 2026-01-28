import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { MdOutlineRefresh } from 'solid-icons/md';
import { cn } from 'tailwind-variants';

import { useI18n } from '@/Locale';

export const Spinner: Component<ComponentProps<typeof MdOutlineRefresh>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  const translator = useI18n();

  return (
    <MdOutlineRefresh
      role='status'
      aria-label={translator('ui.loading')}
      class={cn('size-4 animate-spin shrink-0', local.class)}
      {...others}
    />
  );
};
