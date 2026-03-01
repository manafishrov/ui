import { type Component, type ComponentProps, Show, splitProps } from 'solid-js';
import { type VariantProps, cn, tv } from 'tailwind-variants';

import { Separator } from '@/components/Separator';
import { Spinner } from '@/components/Spinner';

export type ButtonProps = Omit<ComponentProps<'button'>, 'size'> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
  };

export const buttonVariants = tv({
  base: "pointer-cursor text-sm font-medium [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-clip-padding whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-[invalid=true]:border-destructive data-[invalid=true]:ring-[3px] data-[invalid=true]:ring-destructive/20 dark:data-[invalid=true]:border-destructive/50 dark:data-[invalid=true]:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
  variants: {
    size: {
      default:
        'h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
      icon: 'size-8',
      'icon-lg': 'size-9',
      'icon-sm':
        'size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg',
      'icon-xs':
        "size-6 [&_svg:not([class*='size-'])]:size-3 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg",
      lg: 'h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3',
      sm: "h-7 gap-1 px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] in-data-[slot=button-group]:rounded-lg",
      xs: "h-6 gap-1 px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg",
    },
    variant: {
      default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
      destructive:
        'bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40',
      ghost:
        'hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50',
      link: 'text-primary underline-offset-4 hover:underline',
      outline:
        'border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50',
      secondary:
        'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
    },
  },
});

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export const Button: Component<ButtonProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'size', 'variant', 'loading', 'children']);
  return (
    <button
      class={buttonVariants({ class: local.class, size: local.size, variant: local.variant })}
      disabled={local.loading}
      data-loading={local.loading}
      data-slot='button'
      {...others}
    >
      <Show when={local.loading}>
        <Spinner />
      </Show>
      {local.children}
    </button>
  );
};

export const buttonGroupVariants = tv({
  base: "has-[>[data-slot=button-group]]:gap-2 flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-lg [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  variants: {
    orientation: {
      horizontal:
        '*:data-slot:rounded-r-none [&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg! [&>[data-slot]~[data-slot]]:rounded-l-none [&>[data-slot]~[data-slot]]:border-l-0',
      vertical:
        'flex-col *:data-slot:rounded-b-none [&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-lg! [&>[data-slot]~[data-slot]]:rounded-t-none [&>[data-slot]~[data-slot]]:border-t-0',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export const ButtonGroup: Component<
  ComponentProps<'div'> & VariantProps<typeof buttonGroupVariants>
> = (props) => {
  const [local, others] = splitProps(props, ['class', 'orientation']);
  return (
    <div
      role='group'
      data-slot='button-group'
      data-orientation={local.orientation ?? 'horizontal'}
      class={buttonGroupVariants({ orientation: local.orientation, class: local.class })}
      {...others}
    />
  );
};

export const ButtonGroupText: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='button-group-text'
      class={cn(
        "gap-2 px-2.5 text-sm font-medium [&_svg:not([class*='size-'])]:size-4 flex items-center rounded-lg border bg-muted [&_svg]:pointer-events-none",
        local.class,
      )}
      {...others}
    />
  );
};

export const ButtonGroupSeparator: Component<
  ComponentProps<typeof Separator> & { orientation?: 'horizontal' | 'vertical' }
> = (props) => {
  const [local, others] = splitProps(props, ['class', 'orientation']);
  return (
    <Separator
      data-slot='button-group-separator'
      orientation={local.orientation ?? 'vertical'}
      class={cn(
        'relative self-stretch bg-input data-[orientation=horizontal]:mx-px data-[orientation=horizontal]:w-auto data-[orientation=vertical]:my-px data-[orientation=vertical]:h-auto',
        local.class,
      )}
      {...others}
    />
  );
};
