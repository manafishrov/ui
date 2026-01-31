import { Checkbox as CheckboxPrimitive } from '@ark-ui/solid/checkbox';
import { MdOutlineCheck } from 'solid-icons/md';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const CheckboxGroup = CheckboxPrimitive.Group;
export const CheckboxContext = CheckboxPrimitive.Context;

export type CheckboxProps = CheckboxPrimitive.RootProps & {
  label?: string;
};

export const Checkbox: Component<CheckboxProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'label', 'children']);

  return (
    <CheckboxPrimitive.Root
      class={cn(
        'group/checkbox relative inline-flex items-center gap-2 transition-all outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:cursor-default',
        local.class,
      )}
      {...others}
    >
      <CheckboxPrimitive.Control
        data-slot='checkbox'
        class={cn(
          'border-input flex size-4 shrink-0 items-center justify-center rounded-2 border transition-colors outline-none',
          'focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring',
          'data-invalid:ring-[3px] data-invalid:ring-destructive/20 data-invalid:border-destructive dark:data-invalid:border-destructive/50',
          'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary',
          'data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground data-[state=indeterminate]:border-primary',
          'data-disabled:opacity-50',
          'data-readonly:focus-visible:ring-0 data-readonly:focus-visible:border-input',
        )}
      >
        <CheckboxPrimitive.Indicator
          data-slot='checkbox-indicator'
          class='grid place-content-center text-current transition-none'
        >
          <MdOutlineCheck class='size-3.5' />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Control>
      {typeof local.label === 'string' && (
        <CheckboxPrimitive.Label class='text-sm leading-none font-medium select-none group-data-disabled/checkbox:cursor-not-allowed group-data-disabled/checkbox:opacity-70'>
          {local.label}
        </CheckboxPrimitive.Label>
      )}
      {local.children}
      <CheckboxPrimitive.HiddenInput />
    </CheckboxPrimitive.Root>
  );
};
