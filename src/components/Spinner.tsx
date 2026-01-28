import { MdOutlineRefresh } from 'solid-icons/md';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { tv } from 'tailwind-variants';

import { useI18n } from '@/I18n';

export const spinnerVariants = tv({
  base: 'size-4 animate-spin shrink-0',
});

export const Spinner: Component<ComponentProps<typeof MdOutlineRefresh>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  const t = useI18n();

  return (
    <MdOutlineRefresh
      role='status'
      aria-label={t('ui.spinner.label')}
      class={spinnerVariants({ class: local.class })}
      {...others}
    />
  );
};
