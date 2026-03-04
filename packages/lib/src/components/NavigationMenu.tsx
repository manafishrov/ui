import { NavigationMenu as NavigationMenuPrimitive } from '@ark-ui/solid/navigation-menu';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';
import ExpandMoreIcon from '~icons/material-symbols/expand-more';

export const NavigationMenu: Component<NavigationMenuPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <NavigationMenuPrimitive.Root
      data-slot='navigation-menu'
      class={cn(
        'group/navigation-menu relative flex max-w-max flex-1 items-center justify-center',
        local.class,
      )}
      {...others}
    >
      {local.children}
    </NavigationMenuPrimitive.Root>
  );
};

export const NavigationMenuList: Component<NavigationMenuPrimitive.ListProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <NavigationMenuPrimitive.List
      data-slot='navigation-menu-list'
      class={cn('gap-1 group flex flex-1 list-none items-center justify-center', local.class)}
      {...others}
    />
  );
};

export const NavigationMenuItem: Component<NavigationMenuPrimitive.ItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <NavigationMenuPrimitive.Item
      data-slot='navigation-menu-item'
      class={cn('relative', local.class)}
      {...others}
    >
      {local.children}
    </NavigationMenuPrimitive.Item>
  );
};

export const NavigationMenuTrigger: Component<NavigationMenuPrimitive.TriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot='navigation-menu-trigger'
      class={cn(
        'group h-9 px-4 py-2 text-sm font-medium inline-flex w-max items-center justify-center rounded-md bg-background transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-active:bg-accent/50 data-[state=open]:bg-accent/50',
        local.class,
      )}
      {...others}
    >
      {local.children}{' '}
      <ExpandMoreIcon
        class='ml-1 size-3 relative top-px transition duration-300 group-data-[state=open]:rotate-180'
        aria-hidden='true'
      />
    </NavigationMenuPrimitive.Trigger>
  );
};

export const NavigationMenuContent: Component<NavigationMenuPrimitive.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <NavigationMenuPrimitive.Content
      data-slot='navigation-menu-content'
      class={cn(
        'p-4 shadow-md h-auto w-auto origin-top-left rounded-md bg-popover text-popover-foreground ring-1 ring-foreground/10 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        'left-0 mt-1.5 absolute top-full min-w-[12rem]',
        local.class,
      )}
      {...others}
    />
  );
};

export const NavigationMenuIndicator: Component<NavigationMenuPrimitive.IndicatorProps> = (
  props,
) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot='navigation-menu-indicator'
      class={cn(
        'h-1.5 top-full z-[1] flex items-end justify-center overflow-hidden data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:animate-in data-[state=open]:fade-in',
        local.class,
      )}
      {...others}
    />
  );
};

export const NavigationMenuArrow: Component<NavigationMenuPrimitive.ArrowProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <NavigationMenuPrimitive.Arrow
      data-slot='navigation-menu-arrow'
      class={cn(
        'h-2 w-2 shadow-md relative top-[70%] rotate-45 rounded-tl-sm border-t border-l bg-border',
        local.class,
      )}
      {...others}
    />
  );
};

export const NavigationMenuViewport: Component<NavigationMenuPrimitive.ViewportProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <NavigationMenuPrimitive.Viewport
      data-slot='navigation-menu-viewport'
      class={cn(
        'origin-top-center mt-1.5 shadow-lg md:w-[var(--radix-navigation-menu-viewport-width)] relative h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:zoom-in-90',
        local.class,
      )}
      {...others}
    />
  );
};

export const NavigationMenuLink: Component<NavigationMenuPrimitive.LinkProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <NavigationMenuPrimitive.Link
      data-slot='navigation-menu-link'
      class={cn(
        'space-y-1 p-3 block rounded-md leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
        local.class,
      )}
      {...others}
    />
  );
};
