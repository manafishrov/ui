import { MdOutlineChevron_right, MdOutlineMore_horiz } from 'solid-icons/md';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { useLocale } from '@/Locale';

export const Breadcrumb: Component<ComponentProps<'nav'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <nav aria-label='breadcrumb' data-slot='breadcrumb' class={cn(local.class)} {...others} />;
};

export const BreadcrumbList: Component<ComponentProps<'ol'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ol
      data-slot='breadcrumb-list'
      class={cn(
        'text-muted-foreground gap-1.5 text-sm flex flex-wrap items-center break-words',
        local.class,
      )}
      {...others}
    />
  );
};

export const BreadcrumbItem: Component<ComponentProps<'li'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <li
      data-slot='breadcrumb-item'
      class={cn('gap-1 inline-flex items-center', local.class)}
      {...others}
    />
  );
};

export const BreadcrumbLink: Component<ComponentProps<'a'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <a
      data-slot='breadcrumb-link'
      class={cn('hover:text-foreground transition-colors', local.class)}
      {...others}
    />
  );
};

export const BreadcrumbPage: Component<ComponentProps<'span'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <span
      data-slot='breadcrumb-page'
      role='link'
      aria-disabled='true'
      aria-current='page'
      class={cn('text-foreground font-normal', local.class)}
      {...others}
    />
  );
};

export const BreadcrumbSeparator: Component<ComponentProps<'li'>> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <li
      data-slot='breadcrumb-separator'
      role='presentation'
      aria-hidden='true'
      class={cn('[&>svg]:size-3.5', local.class)}
      {...others}
    >
      {local.children ?? <MdOutlineChevron_right class='cn-rtl-flip' />}
    </li>
  );
};

export const BreadcrumbEllipsis: Component<ComponentProps<'span'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  const t = useLocale();

  return (
    <span
      data-slot='breadcrumb-ellipsis'
      role='presentation'
      aria-hidden='true'
      class={cn('size-5 flex items-center justify-center', local.class)}
      {...others}
    >
      <MdOutlineMore_horiz class='size-4' />
      <span class='sr-only'>{String(t('ui.common.more'))}</span>
    </span>
  );
};
