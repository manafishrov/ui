import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { type VariantProps, tv } from 'tailwind-variants';

export const separatorVariants = tv({
  base: 'bg-border shrink-0',
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'h-full w-px',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export type SeparatorProps = ComponentProps<'div'> &
  VariantProps<typeof separatorVariants> & {
    decorative?: boolean;
  };

export const Separator: Component<SeparatorProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'orientation', 'decorative']);

  return (
    <div
      data-slot='separator'
      {...(local.decorative === true
        ? { role: 'none' }
        : {
            role: 'separator',
            'aria-orientation': local.orientation === 'vertical' ? 'vertical' : 'horizontal',
          })}
      class={separatorVariants({
        orientation: local.orientation,
        class: local.class,
      })}
      {...others}
    />
  );
};
