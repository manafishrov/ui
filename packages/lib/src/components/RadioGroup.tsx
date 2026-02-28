import { RadioGroup as RadioGroupPrimitive } from '@ark-ui/solid/radio-group';
import MdFillCircle from '@icons/ic/baseline-circle';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const RadioGroup: Component<RadioGroupPrimitive.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <RadioGroupPrimitive.Root
      data-slot='radio-group'
      class={cn('group/radio-group gap-2 grid w-full', local.class)}
      {...others}
    />
  );
};

export const RadioGroupLabel: Component<RadioGroupPrimitive.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <RadioGroupPrimitive.Label
      class={cn(
        'gap-2 text-sm font-medium flex items-center leading-none select-none group-data-disabled:pointer-events-none group-data-disabled:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        'data-disabled:cursor-not-allowed data-disabled:opacity-70',
        local.class,
      )}
      {...others}
    />
  );
};

export const RadioGroupItem: Component<RadioGroupPrimitive.ItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <RadioGroupPrimitive.Item
      data-slot='radio-group-item'
      class={cn('group/radio-group-item gap-2 flex items-center', local.class)}
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
        'size-4 group/radio-group-item peer after:-inset-x-3 after:-inset-y-2 relative flex aspect-square shrink-0 rounded-full border border-input text-primary outline-none after:absolute data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:border-ring data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50 data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/20 dark:bg-input/30 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40',
        local.class,
      )}
      {...others}
    >
      {local.children ?? (
        <RadioGroupPrimitive.Indicator
          data-slot='radio-group-indicator'
          class='size-4 flex items-center justify-center text-primary group-data-invalid/radio-group-item:text-destructive'
        >
          <MdFillCircle class='size-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-current' />
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
        'text-sm font-medium leading-none select-none data-disabled:cursor-not-allowed data-disabled:opacity-70',
        local.class,
      )}
      {...others}
    />
  );
};
