import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { tv, type VariantProps } from 'tailwind-variants';

export const textareaVariants = tv({
  base: 'min-h-16 text-base md:text-sm flex field-sizing-content w-full bg-transparent transition-colors outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 data-readonly:cursor-default',
  variants: {
    variant: {
      outline:
        'px-2.5 py-2 rounded-lg border border-input focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:bg-input/50 data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/20 data-readonly:focus-visible:border-input data-readonly:focus-visible:ring-0 dark:bg-input/30 dark:disabled:bg-input/80 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40',
      ghost: 'px-0 py-0 border-none bg-transparent shadow-none ring-0 focus-visible:ring-0',
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
