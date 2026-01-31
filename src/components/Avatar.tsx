import { Avatar as AvatarPrimitive } from '@ark-ui/solid/avatar';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
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
        'size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten',
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
      class={cn('rounded-full aspect-square size-full object-cover', local.class)}
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
        'bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs',
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
        'bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none',
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
        '*:data-[slot=avatar]:ring-background group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2',
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
        'bg-muted text-muted-foreground size-8 rounded-full text-sm group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 ring-background relative flex shrink-0 items-center justify-center ring-2',
        local.class,
      )}
      {...others}
    />
  );
};
