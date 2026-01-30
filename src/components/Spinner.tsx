import { MdOutlineRefresh } from 'solid-icons/md';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { useLocale } from '@/Locale';

export const Spinner: Component<ComponentProps<typeof MdOutlineRefresh>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  const t = useLocale();

  return (
    <MdOutlineRefresh
      role='status'
      aria-label={t('ui.common.loading')}
      class={cn('size-4 animate-spin shrink-0', local.class)}
      {...others}
    />
  );
};
