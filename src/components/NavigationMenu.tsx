import { HoverCard as HoverCardPrimitive } from '@ark-ui/solid/hover-card';
import { MdOutlineExpand_more } from 'solid-icons/md';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const NavigationMenu: Component<ComponentProps<'nav'>> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <nav
      data-slot='navigation-menu'
      class={cn(
        'max-w-max group/navigation-menu relative flex flex-1 items-center justify-center',
        local.class,
      )}
      {...others}
    >
      {local.children}
    </nav>
  );
};

export const NavigationMenuList: Component<ComponentProps<'ul'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ul
      data-slot='navigation-menu-list'
      class={cn('gap-1 group flex flex-1 list-none items-center justify-center', local.class)}
      {...others}
    />
  );
};

export const NavigationMenuItem: Component<HoverCardPrimitive.RootProps & { class?: string }> = (
  props,
) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <HoverCardPrimitive.Root
      openDelay={0}
      closeDelay={200}
      positioning={{ placement: 'bottom', gutter: 8 }}
      {...others}
    >
      <li data-slot='navigation-menu-item' class={cn('relative', local.class)}>
        {local.children}
      </li>
    </HoverCardPrimitive.Root>
  );
};

export const NavigationMenuTrigger: Component<HoverCardPrimitive.TriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <HoverCardPrimitive.Trigger
      data-slot='navigation-menu-trigger'
      class={cn(
        'group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-active:bg-accent/50 data-[state=open]:bg-accent/50',
        local.class,
      )}
      {...others}
    >
      {local.children}{' '}
      <MdOutlineExpand_more
        class='relative top-px ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180'
        aria-hidden='true'
      />
    </HoverCardPrimitive.Trigger>
  );
};

export const NavigationMenuContent: Component<HoverCardPrimitive.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <HoverCardPrimitive.Positioner class='top-0 left-0 isolate z-50 w-full'>
      <HoverCardPrimitive.Content
        data-slot='navigation-menu-content'
        class={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 h-auto w-auto rounded-md p-4 shadow-md ring-1 origin-(--transform-origin) outline-none',
          local.class,
        )}
        {...others}
      />
    </HoverCardPrimitive.Positioner>
  );
};

export const NavigationMenuLink: Component<ComponentProps<'a'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <a
      data-slot='navigation-menu-link'
      class={cn(
        'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none',
        local.class,
      )}
      {...others}
    />
  );
};
