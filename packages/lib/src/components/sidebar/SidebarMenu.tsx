import { ark } from '@ark-ui/solid/factory';
import { createMemo, type Component, type ComponentProps, type JSX } from 'solid-js';
import { type VariantProps, tv, cn } from 'tailwind-variants';

import { Skeleton } from '@/components/Skeleton';
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@/components/Tooltip';

import { RANDOM_WIDTH_BASE, RANDOM_WIDTH_RANGE } from './constants';
import { useSidebar } from './context';

export const SidebarMenu: Component<ComponentProps<'ul'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ul
      data-slot='sidebar-menu'
      data-sidebar='menu'
      class={cn('gap-0 min-w-0 flex w-full flex-col', local.class)}
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

export const sidebarMenuButtonVariants = tv({
  base: 'gap-2 p-2 text-sm group-has-data-sidebar-menu-action/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! data-active:font-medium data-[status=active]:font-medium aria-[current=page]:font-medium peer/menu-button group/menu-button [&_svg]:size-4 flex w-full items-center overflow-hidden rounded-md text-left ring-sidebar-ring outline-hidden transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-[current=page]:bg-sidebar-accent aria-[current=page]:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground data-[status=active]:bg-sidebar-accent data-[status=active]:text-sidebar-accent-foreground [&_svg]:shrink-0 [&>span:last-child]:truncate',
  variants: {
    variant: {
      default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
      outline:
        'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
    },
    size: {
      default: 'h-8 text-sm',
      sm: 'h-7 text-xs',
      lg: 'h-12 text-sm group-data-[collapsible=icon]:p-0!',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type SidebarMenuButtonAsChild = ComponentProps<typeof ark.button>['asChild'];

export type SidebarMenuButtonProps = Omit<ComponentProps<'button'>, 'asChild'> &
  VariantProps<typeof sidebarMenuButtonVariants> & {
    asChild?: SidebarMenuButtonAsChild;
    isActive?: boolean;
    tooltip?: string | ComponentProps<typeof TooltipContent>;
  };

type SidebarMenuButtonStyleProps = Pick<
  SidebarMenuButtonProps,
  'size' | 'isActive' | 'variant' | 'class'
>;

type SidebarMenuButtonDataProps = {
  'data-slot': 'sidebar-menu-button';
  'data-sidebar': 'menu-button';
  'data-size': 'sm' | 'default' | 'lg';
  'data-active'?: true;
  class: string;
};

const getTooltipContentProps = (
  tooltip: SidebarMenuButtonProps['tooltip'],
): ComponentProps<typeof TooltipContent> =>
  typeof tooltip === 'string' || !tooltip ? {} : tooltip;

const getTooltipChildren = (
  tooltip: SidebarMenuButtonProps['tooltip'],
): ComponentProps<typeof TooltipContent>['children'] => {
  if (typeof tooltip === 'string') {
    return tooltip;
  }
  if (!tooltip) {
    return '';
  }
  return tooltip.children;
};

const getSidebarMenuButtonDataProps = (
  local: SidebarMenuButtonStyleProps,
): SidebarMenuButtonDataProps => ({
  'data-slot': 'sidebar-menu-button',
  'data-sidebar': 'menu-button',
  'data-size': local.size ?? 'default',
  ...(local.isActive === true ? { 'data-active': true as const } : {}),
  class: sidebarMenuButtonVariants({
    variant: local.variant,
    size: local.size,
    class: local.class,
  }),
});

const getSidebarMenuButtonAsChildProps = (
  asChild: SidebarMenuButtonProps['asChild'],
): Pick<ComponentProps<typeof ark.button>, 'asChild'> => (asChild ? { asChild } : {});

const renderSidebarMenuButton = (
  asChild: SidebarMenuButtonProps['asChild'],
  props: ComponentProps<'button'>,
  children: SidebarMenuButtonProps['children'],
): JSX.Element => (
  <ark.button {...props} {...getSidebarMenuButtonAsChildProps(asChild)}>
    {children}
  </ark.button>
);

export const SidebarMenuButton: Component<SidebarMenuButtonProps> = (props) => {
  const [local, others] = splitProps(props, [
    'asChild',
    'children',
    'isActive',
    'variant',
    'size',
    'tooltip',
    'class',
  ]);
  const { isMobile, state, side } = useSidebar();

  const tooltipPlacement = createMemo(() => (side() === 'left' ? 'right' : 'left'));
  const shouldUseTooltip = createMemo(
    () => Boolean(local.tooltip) && state() === 'collapsed' && !isMobile(),
  );
  const buttonDataProps = createMemo(() => getSidebarMenuButtonDataProps(local));

  return (
    <Show
      when={shouldUseTooltip()}
      fallback={renderSidebarMenuButton(
        local.asChild,
        { ...buttonDataProps(), ...others },
        local.children,
      )}
    >
      <Tooltip positioning={{ placement: tooltipPlacement() }} openDelay={100}>
        <TooltipTrigger
          {...buttonDataProps()}
          {...others}
          asChild={(triggerProps) =>
            renderSidebarMenuButton(local.asChild, triggerProps(), local.children)
          }
        />
        <Portal>
          <TooltipPositioner>
            <TooltipContent {...getTooltipContentProps(local.tooltip)}>
              <TooltipArrow />
              {getTooltipChildren(local.tooltip)}
            </TooltipContent>
          </TooltipPositioner>
        </Portal>
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
        'top-1.5 right-1 w-5 p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 [&>svg]:size-4 after:-inset-2 md:after:hidden absolute flex aspect-square items-center justify-center rounded-md text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-sidebar-accent-foreground after:absolute hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:shrink-0',
        local.showOnHover === true &&
          'md:opacity-0 group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-active/menu-button:text-sidebar-accent-foreground data-open:opacity-100',
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
        'right-1 h-5 min-w-5 px-1 text-xs font-medium peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 pointer-events-none absolute flex items-center justify-center rounded-md text-sidebar-foreground tabular-nums select-none group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-sidebar-accent-foreground peer-data-active/menu-button:text-sidebar-accent-foreground',
        local.class,
      )}
      {...others}
    />
  );
};

export type SidebarMenuSkeletonProps = ComponentProps<'div'> & {
  showIcon?: boolean;
};

export const SidebarMenuSkeleton: Component<SidebarMenuSkeletonProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'showIcon']);

  const width = createMemo(
    () => `${Math.floor(Math.random() * RANDOM_WIDTH_RANGE) + RANDOM_WIDTH_BASE}%`,
  );

  return (
    <div
      data-slot='sidebar-menu-skeleton'
      data-sidebar='menu-skeleton'
      class={cn('h-8 gap-2 px-2 flex items-center rounded-md', local.class)}
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
        'mx-3.5 gap-1 px-2.5 py-0.5 min-w-0 flex translate-x-px flex-col border-l border-sidebar-border group-data-[collapsible=icon]:hidden',
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
      {...(local.isActive === true ? { 'data-active': true as const } : {})}
      class={cn(
        'h-7 gap-2 px-2 data-[size=md]:text-sm data-[size=sm]:text-xs [&>svg]:size-4 min-w-0 flex -translate-x-px items-center overflow-hidden rounded-md text-sidebar-foreground ring-sidebar-ring outline-hidden group-data-[collapsible=icon]:hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-[current=page]:bg-sidebar-accent aria-[current=page]:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground data-[status=active]:bg-sidebar-accent data-[status=active]:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground',
        local.class,
      )}
      {...others}
    />
  );
};
