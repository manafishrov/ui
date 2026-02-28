import { Pagination as PaginationPrimitive } from '@ark-ui/solid/pagination';
import OutlineChevronLeftIcon from '~icons/ic/outline-chevron-left';
import OutlineChevronRightIcon from '~icons/ic/outline-chevron-right';
import OutlineMoreHorizIcon from '~icons/ic/outline-more-horiz';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { buttonVariants } from '@/components/Button';
import * as messages from '@/paraglide/messages';

export const Pagination: Component<PaginationPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PaginationPrimitive.Root
      data-slot='pagination'
      class={cn('gap-1 mx-auto flex w-full justify-center', local.class)}
      {...others}
    />
  );
};

export const PaginationContent: Component<ComponentProps<'ul'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ul
      data-slot='pagination-content'
      class={cn('gap-1 flex items-center', local.class)}
      {...others}
    />
  );
};

export const PaginationItem: Component<ComponentProps<'li'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <li data-slot='pagination-item' class={cn('', local.class)} {...others} />;
};

export const PaginationLink: Component<PaginationPrimitive.ItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children', 'value', 'type']);
  return (
    <PaginationPrimitive.Item
      {...others}
      value={local.value}
      type={local.type}
      data-slot='pagination-link'
      class={cn(
        buttonVariants({
          variant: 'ghost',
          size: 'icon',
        }),
        'data-selected:border data-selected:border-border data-selected:bg-background data-selected:text-foreground data-selected:hover:bg-muted data-selected:hover:text-foreground',
        local.class,
      )}
    >
      {local.children ?? local.value}
    </PaginationPrimitive.Item>
  );
};

export const PaginationPrevious: Component<PaginationPrimitive.PrevTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);

  return (
    <PaginationPrimitive.PrevTrigger
      {...others}
      data-slot='pagination-previous'
      class={cn(
        buttonVariants({
          variant: 'ghost',
          size: 'default',
        }),
        'gap-1 pl-2.5',
        local.class,
      )}
    >
      {local.children ?? (
        <>
          <OutlineChevronLeftIcon />
          <span>{messages.ui_pagination_previous()}</span>
        </>
      )}
    </PaginationPrimitive.PrevTrigger>
  );
};

export const PaginationNext: Component<PaginationPrimitive.NextTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);

  return (
    <PaginationPrimitive.NextTrigger
      {...others}
      data-slot='pagination-next'
      class={cn(
        buttonVariants({
          variant: 'ghost',
          size: 'default',
        }),
        'gap-1 pr-2.5',
        local.class,
      )}
    >
      {local.children ?? (
        <>
          <span>{messages.ui_pagination_next()}</span>
          <OutlineChevronRightIcon />
        </>
      )}
    </PaginationPrimitive.NextTrigger>
  );
};

export const PaginationEllipsis: Component<PaginationPrimitive.EllipsisProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <PaginationPrimitive.Ellipsis
      {...others}
      data-slot='pagination-ellipsis'
      class={cn('h-9 w-9 flex items-center justify-center', local.class)}
    >
      <OutlineMoreHorizIcon class='size-4' />
      <span class='sr-only'>{messages.ui_pagination_more()}</span>
    </PaginationPrimitive.Ellipsis>
  );
};
