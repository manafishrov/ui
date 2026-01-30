import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const Label: Component<ComponentProps<'label'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <label
      data-slot='label'
      class={cn(
        'gap-2 text-sm leading-none font-medium group-data-disabled:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-disabled:pointer-events-none peer-disabled:cursor-not-allowed',
        local.class,
      )}
      {...others}
    />
  );
};
