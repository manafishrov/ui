import { RadioGroup as RadioGroupPrimitive } from '@ark-ui/solid/radio-group';
import { MdFillCircle } from 'solid-icons/md';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { Label } from '@/components/Label';

export const RadioGroup: Component<RadioGroupPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <RadioGroupPrimitive.Root
      data-slot='radio-group'
      class={cn('group/radio-group grid gap-2 w-full', local.class)}
      {...others}
    />
  );
};

export const RadioGroupLabel: Component<RadioGroupPrimitive.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <RadioGroupPrimitive.Label
      asChild={(labelProps) => (
        <Label
          {...labelProps()}
          class={cn('data-disabled:cursor-not-allowed data-disabled:opacity-70', local.class)}
          {...others}
        />
      )}
    />
  );
};

export const RadioGroupItem: Component<RadioGroupPrimitive.ItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <RadioGroupPrimitive.Item
      data-slot='radio-group-item'
      class={cn('group/radio-group-item flex items-center gap-2', local.class)}
      {...others}
    >
      {local.children}
      <RadioGroupPrimitive.ItemHiddenInput />
    </RadioGroupPrimitive.Item>
  );
};

export const RadioGroupItemControl: Component<RadioGroupPrimitive.ItemControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <RadioGroupPrimitive.ItemControl
      class={cn(
        'border-input text-primary dark:bg-input/30 data-focus-visible:border-ring data-focus-visible:ring-ring/50 data-invalid:ring-destructive/20 dark:data-invalid:ring-destructive/40 data-invalid:border-destructive dark:data-invalid:border-destructive/50 flex size-4 rounded-full data-focus-visible:ring-[3px] data-invalid:ring-[3px] group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50',
        local.class,
      )}
      {...others}
    >
      {local.children ?? (
        <RadioGroupPrimitive.Indicator
          data-slot='radio-group-indicator'
          class='group-data-invalid/radio-group-item:text-destructive text-primary flex size-4 items-center justify-center'
        >
          <MdFillCircle class='absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-current' />
        </RadioGroupPrimitive.Indicator>
      )}
    </RadioGroupPrimitive.ItemControl>
  );
};

export const RadioGroupItemText: Component<RadioGroupPrimitive.ItemTextProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <RadioGroupPrimitive.ItemText
      class={cn(
        'text-sm leading-none font-medium select-none data-disabled:cursor-not-allowed data-disabled:opacity-70',
        local.class,
      )}
      {...others}
    />
  );
};
