import type { Component, ComponentProps } from 'solid-js';

import { Link, type LinkProps } from '@tanstack/solid-router';
import { cn } from 'tailwind-variants';
import OutlineChevronRightIcon from '~icons/ic/outline-chevron-right';
import OutlineMoreHorizIcon from '~icons/ic/outline-more-horiz';

import * as messages from '@/paraglide/messages';

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
        'gap-1.5 text-sm flex flex-wrap items-center wrap-break-word text-muted-foreground',
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

export type BreadcrumbLinkProps = LinkProps & { class?: string };

export const BreadcrumbLink: Component<BreadcrumbLinkProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <Link
      data-slot='breadcrumb-link'
      class={cn('transition-colors hover:text-foreground', local.class)}
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
      class={cn('font-normal text-foreground', local.class)}
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
      class={cn('[&>svg]:size-4.5', local.class)}
      {...others}
    >
      {local.children ?? <OutlineChevronRightIcon />}
    </li>
  );
};

export const BreadcrumbEllipsis: Component<ComponentProps<'span'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <span
      data-slot='breadcrumb-ellipsis'
      role='presentation'
      aria-hidden='true'
      class={cn('size-6 relative flex items-center justify-center', local.class)}
      {...others}
    >
      <OutlineMoreHorizIcon class='size-5' />
      <span class='sr-only'>{messages.ui_common_more()}</span>
    </span>
  );
};
