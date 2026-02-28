import { Avatar as AvatarPrimitive } from '@ark-ui/solid/avatar';
import type { Component, ComponentProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const Avatar: Component<AvatarPrimitive.RootProps & { size?: 'sm' | 'default' | 'lg' }> = (
  props,
) => {
  const [local, others] = splitProps(props, ['class', 'size']);
  return (
    <AvatarPrimitive.Root
      data-slot='avatar'
      data-size={local.size ?? 'default'}
      class={cn(
        'size-8 data-[size=lg]:size-10 data-[size=sm]:size-6 group/avatar after:inset-0 relative flex shrink-0 rounded-full select-none after:absolute after:rounded-full after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten',
        local.class,
      )}
      {...others}
    />
  );
};

export const AvatarImage: Component<AvatarPrimitive.ImageProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <AvatarPrimitive.Image
      data-slot='avatar-image'
      class={cn('aspect-square size-full rounded-full object-cover', local.class)}
      {...others}
    />
  );
};

export const AvatarFallback: Component<AvatarPrimitive.FallbackProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <AvatarPrimitive.Fallback
      data-slot='avatar-fallback'
      class={cn(
        'text-sm group-data-[size=sm]/avatar:text-xs flex size-full items-center justify-center rounded-full bg-muted text-muted-foreground',
        local.class,
      )}
      {...others}
    />
  );
};

export const AvatarBadge: Component<ComponentProps<'span'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <span
      data-slot='avatar-badge'
      class={cn(
        'right-0 bottom-0 absolute z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none',
        'group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden',
        'group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2',
        'group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2',
        local.class,
      )}
      {...others}
    />
  );
};

export const AvatarGroup: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='avatar-group'
      class={cn(
        'group/avatar-group -space-x-2 flex *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background',
        local.class,
      )}
      {...others}
    />
  );
};

export const AvatarGroupCount: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='avatar-group-count'
      class={cn(
        'size-8 text-sm group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 relative flex shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground ring-2 ring-background',
        local.class,
      )}
      {...others}
    />
  );
};
