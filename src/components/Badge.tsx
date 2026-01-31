import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { type VariantProps, tv } from 'tailwind-variants';

export const badgeVariants = tv({
  base: 'h-5 gap-1 rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium transition-all inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden group/badge select-none has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3!',
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
      secondary: 'bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80',
      destructive:
        'bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20',
      outline: 'border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground',
      ghost: 'hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50',
      link: 'text-primary underline-offset-4 hover:underline',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type BadgeProps = ComponentProps<'span'> & VariantProps<typeof badgeVariants>;

export const Badge: Component<BadgeProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'variant']);

  return (
    <span
      data-slot='badge'
      class={badgeVariants({ class: local.class, variant: local.variant })}
      {...others}
    />
  );
};
