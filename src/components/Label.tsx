import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { tv, type VariantProps } from 'tailwind-variants';

export const labelVariants = tv({
  base: 'gap-2 text-sm leading-none font-medium group-data-disabled:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-disabled:pointer-events-none peer-disabled:cursor-not-allowed',
});

export type LabelProps = ComponentProps<'label'> & VariantProps<typeof labelVariants>;

export const Label: Component<LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <label data-slot='label' class={labelVariants({ class: local.class })} {...others} />;
};
