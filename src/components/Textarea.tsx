import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { tv, type VariantProps } from 'tailwind-variants';

export const textareaVariants = tv({
  base: 'placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full bg-transparent text-base transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
  variants: {
    variant: {
      outline:
        'border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 rounded-lg border px-2.5 py-2 focus-visible:ring-[3px] aria-invalid:ring-[3px]',
      ghost: 'border-none bg-transparent px-0 py-0 shadow-none ring-0 focus-visible:ring-0',
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
});

export type TextareaProps = ComponentProps<'textarea'> & VariantProps<typeof textareaVariants>;

export const Textarea: Component<TextareaProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'variant']);
  return (
    <textarea
      data-slot='textarea'
      class={textareaVariants({ variant: local.variant, class: local.class })}
      {...others}
    />
  );
};
