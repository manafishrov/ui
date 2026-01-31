import { type Component, type ComponentProps, Show, splitProps } from 'solid-js';
import { type VariantProps, cn, tv } from 'tailwind-variants';

import { Separator } from '@/components/Separator';
import { Spinner } from '@/components/Spinner';

export type ButtonProps = Omit<ComponentProps<'button'>, 'size'> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
  };

export const buttonVariants = tv({
  base: "cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 data-invalid:ring-destructive/20 dark:data-invalid:ring-destructive/40 data-invalid:border-destructive dark:data-invalid:border-destructive/50 rounded-lg border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-[3px] data-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
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
        "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
      lg: 'h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3',
      sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
      xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
    },
    variant: {
      default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
      destructive:
        'bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30',
      ghost:
        'hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
      outline:
        'border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground',
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
  base: "has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-lg flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  variants: {
    orientation: {
      horizontal:
        '[&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg! [&>[data-slot]~[data-slot]]:rounded-l-none [&>[data-slot]~[data-slot]]:border-l-0 [&>[data-slot]]:rounded-r-none',
      vertical:
        '[&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-lg! flex-col [&>[data-slot]~[data-slot]]:rounded-t-none [&>[data-slot]~[data-slot]]:border-t-0 [&>[data-slot]]:rounded-b-none',
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
        "bg-muted gap-2 rounded-lg border px-2.5 text-sm font-medium [&_svg:not([class*='size-'])]:size-4 flex items-center [&_svg]:pointer-events-none",
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
        'bg-input relative self-stretch data-[orientation=horizontal]:mx-px data-[orientation=horizontal]:w-auto data-[orientation=vertical]:my-px data-[orientation=vertical]:h-auto',
        local.class,
      )}
      {...others}
    />
  );
};
