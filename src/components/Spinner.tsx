import { MdOutlineRefresh } from 'solid-icons/md';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { useI18n } from '@/I18n';

export const Spinner: Component<ComponentProps<typeof MdOutlineRefresh>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  const t = useI18n();

  return (
    <MdOutlineRefresh
      role='status'
      aria-label={t('ui.spinner.label')}
      class={cn('size-4 animate-spin shrink-0', local.class)}
      {...others}
    />
  );
};
