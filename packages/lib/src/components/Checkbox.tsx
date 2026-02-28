import { Checkbox as CheckboxPrimitive } from '@ark-ui/solid/checkbox';
import MdOutlineCheck from '@icons/ic/outline-check';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';
export const CheckboxGroup = CheckboxPrimitive.Group;
export const CheckboxContext = CheckboxPrimitive.Context;

export const Checkbox: Component<CheckboxPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <CheckboxPrimitive.Root
      class={cn(
        'group/checkbox gap-2 relative flex w-fit items-center transition-none outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:cursor-default',
        local.class,
      )}
      {...others}
    >
      {props.children}
      <CheckboxPrimitive.HiddenInput />
    </CheckboxPrimitive.Root>
  );
};

export const CheckboxControl: Component<CheckboxPrimitive.ControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <CheckboxPrimitive.Control
      data-slot='checkbox'
      class={cn(
        'peer size-4 shadow-xs relative flex shrink-0 items-center justify-center rounded-[4px] border border-input text-current transition-colors outline-none',
        'after:-inset-y-2 after:-inset-x-3 after:absolute',
        'data-focus-visible:border-ring data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50',
        'data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50',
        'data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        'data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground',
        'data-disabled:cursor-not-allowed data-disabled:opacity-50',
        'data-readonly:data-focus-visible:border-input data-readonly:data-focus-visible:ring-0',
        local.class,
      )}
      {...others}
    />
  );
};

export const CheckboxIndicator: Component<CheckboxPrimitive.IndicatorProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);

  return (
    <CheckboxPrimitive.Indicator
      data-slot='checkbox-indicator'
      class={cn(
        '[&>svg]:size-3.5 grid place-content-center text-current transition-none',
        local.class,
      )}
      {...others}
    >
      {local.children ?? <MdOutlineCheck />}
    </CheckboxPrimitive.Indicator>
  );
};

export const CheckboxLabel: Component<CheckboxPrimitive.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <CheckboxPrimitive.Label
      class={cn(
        'text-sm font-medium leading-none select-none',
        'data-disabled:cursor-not-allowed data-disabled:opacity-70',
        local.class,
      )}
      {...others}
    />
  );
};
