import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { useLocale } from '@/Locale';

export const Skeleton: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  const t = useLocale();

  return (
    <div
      data-slot='skeleton'
      role='progressbar'
      aria-busy='true'
      aria-label={t('ui.skeleton.loading')}
      class={cn('bg-muted rounded-md animate-pulse', local.class)}
      {...others}
    />
  );
};
