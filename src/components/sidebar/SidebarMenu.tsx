import { type Component, type ComponentProps, createMemo, Show, splitProps } from 'solid-js';
import { type VariantProps, tv, cn } from 'tailwind-variants';

import { Skeleton } from '@/components/Skeleton';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/Tooltip';

import { useSidebar } from './context';

export const SidebarMenu: Component<ComponentProps<'ul'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ul
      data-slot='sidebar-menu'
      data-sidebar='menu'
      class={cn('gap-0 flex w-full min-w-0 flex-col', local.class)}
      {...others}
    />
  );
};

export const SidebarMenuItem: Component<ComponentProps<'li'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <li
      data-slot='sidebar-menu-item'
      data-sidebar='menu-item'
      class={cn('group/menu-item relative', local.class)}
      {...others}
    />
  );
};

const sidebarMenuButtonVariants = tv({
  base: 'ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground gap-2 rounded-md p-2 text-left text-sm transition-[width,height,padding] group-has-data-sidebar-menu-action/menu-item:pr-8 group-data-collapsible-icon:size-8! group-data-collapsible-icon:p-2! focus-visible:ring-2 data-active:font-medium peer/menu-button flex w-full items-center overflow-hidden outline-hidden group/menu-button disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&_svg]:size-4 [&_svg]:shrink-0',
  variants: {
    variant: {
      default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
      outline:
        'bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
    },
    size: {
      default: 'h-8 text-sm',
      sm: 'h-7 text-xs',
      lg: 'h-12 text-sm group-data-collapsible-icon:p-0!',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export type SidebarMenuButtonProps = ComponentProps<'button'> &
  VariantProps<typeof sidebarMenuButtonVariants> & {
    isActive?: boolean;
    tooltip?: string | ComponentProps<typeof TooltipContent>;
  };

export const SidebarMenuButton: Component<SidebarMenuButtonProps> = (props) => {
  const [local, others] = splitProps(props, ['isActive', 'variant', 'size', 'tooltip', 'class']);
  const { isMobile, state } = useSidebar();

  const button = (
    <button
      data-slot='sidebar-menu-button'
      data-sidebar='menu-button'
      data-size={local.size}
      data-active={local.isActive}
      class={cn(
        sidebarMenuButtonVariants({ variant: local.variant, size: local.size }),
        local.class,
      )}
      {...others}
    />
  );

  return (
    <Show when={local.tooltip} fallback={button}>
      <Tooltip positioning={{ placement: 'right' }}>
        <TooltipTrigger asChild={(triggerProps) => <button {...triggerProps}>{button}</button>} />
        <TooltipContent
          hidden={state() !== 'collapsed' || isMobile()}
          {...(typeof local.tooltip === 'string' ? { children: local.tooltip } : local.tooltip)}
        />
      </Tooltip>
    </Show>
  );
};

export type SidebarMenuActionProps = ComponentProps<'button'> & {
  showOnHover?: boolean;
};

export const SidebarMenuAction: Component<SidebarMenuActionProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'showOnHover']);
  return (
    <button
      data-slot='sidebar-menu-action'
      data-sidebar='menu-action'
      class={cn(
        'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 aspect-square w-5 rounded-md p-0 peer-data-size-default/menu-button:top-1.5 peer-data-size-lg/menu-button:top-2.5 peer-data-size-sm/menu-button:top-1 focus-visible:ring-2 [&>svg]:size-4 flex items-center justify-center outline-hidden transition-transform group-data-collapsible-icon:hidden after:absolute after:-inset-2 md:after:hidden [&>svg]:shrink-0',
        local.showOnHover === true &&
          'peer-data-active/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-open:opacity-100 md:opacity-0',
        local.class,
      )}
      {...others}
    />
  );
};

export const SidebarMenuBadge: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='sidebar-menu-badge'
      data-sidebar='menu-badge'
      class={cn(
        'text-sidebar-foreground peer-hover/menu-button:text-sidebar-accent-foreground peer-data-active/menu-button:text-sidebar-accent-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 rounded-md px-1 text-xs font-medium peer-data-size-default/menu-button:top-1.5 peer-data-size-lg/menu-button:top-2.5 peer-data-size-sm/menu-button:top-1 items-center justify-center tabular-nums select-none group-data-collapsible-icon:hidden',
        local.class,
      )}
      {...others}
    />
  );
};

export type SidebarMenuSkeletonProps = ComponentProps<'div'> & {
  showIcon?: boolean;
};

const RANDOM_WIDTH_RANGE = 40;
const RANDOM_WIDTH_BASE = 50;

export const SidebarMenuSkeleton: Component<SidebarMenuSkeletonProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'showIcon']);

  const width = createMemo(
    () => `${Math.floor(Math.random() * RANDOM_WIDTH_RANGE) + RANDOM_WIDTH_BASE}%`,
  );

  return (
    <div
      data-slot='sidebar-menu-skeleton'
      data-sidebar='menu-skeleton'
      class={cn('h-8 gap-2 rounded-md px-2 flex items-center', local.class)}
      {...others}
    >
      <Show when={local.showIcon}>
        <Skeleton class='size-4 rounded-md' data-sidebar='menu-skeleton-icon' />
      </Show>
      <Skeleton
        class='h-4 max-w-(--skeleton-width) flex-1'
        data-sidebar='menu-skeleton-text'
        style={{
          '--skeleton-width': width(),
        }}
      />
    </div>
  );
};

export const SidebarMenuSub: Component<ComponentProps<'ul'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ul
      data-slot='sidebar-menu-sub'
      data-sidebar='menu-sub'
      class={cn(
        'border-sidebar-border mx-3.5 translate-x-px gap-1 border-l px-2.5 py-0.5 group-data-collapsible-icon:hidden flex min-w-0 flex-col',
        local.class,
      )}
      {...others}
    />
  );
};

export const SidebarMenuSubItem: Component<ComponentProps<'li'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <li
      data-slot='sidebar-menu-sub-item'
      data-sidebar='menu-sub-item'
      class={cn('group/menu-sub-item relative', local.class)}
      {...others}
    />
  );
};

export type SidebarMenuSubButtonProps = ComponentProps<'a'> & {
  size?: 'sm' | 'md';
  isActive?: boolean;
};

export const SidebarMenuSubButton: Component<SidebarMenuSubButtonProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'size', 'isActive']);
  return (
    <a
      data-slot='sidebar-menu-sub-button'
      data-sidebar='menu-sub-button'
      data-size={local.size ?? 'md'}
      data-active={local.isActive}
      class={cn(
        'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground h-7 gap-2 rounded-md px-2 focus-visible:ring-2 data-size-md:text-sm data-size-sm:text-xs [&>svg]:size-4 flex min-w-0 -translate-x-px items-center overflow-hidden outline-hidden group-data-collapsible-icon:hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:shrink-0',
        local.class,
      )}
      {...others}
    />
  );
};
