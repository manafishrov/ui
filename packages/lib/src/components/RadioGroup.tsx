import { RadioGroup as RadioGroupPrimitive } from '@ark-ui/solid/radio-group';
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
        'mb-1 gap-2 text-sm font-medium flex items-center leading-none select-none group-data-disabled:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        'data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-70',
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
        'peer size-4 shadow-xs group/radio-group-item relative flex aspect-square shrink-0 items-center justify-center rounded-full border border-input bg-background outline-none transition-[border-color,border-width,box-shadow] after:-inset-x-3 after:-inset-y-2 after:absolute',
        'data-[state=checked]:border-primary data-[state=checked]:border-[5px] group-data-invalid/radio-group-item:data-[state=checked]:border-destructive',
        'data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 data-[focus-visible=true]:border-ring data-[focus-visible=true]:ring-[3px] data-[focus-visible=true]:ring-ring/50 data-[invalid=true]:border-destructive data-[invalid=true]:ring-[3px] data-[invalid=true]:ring-destructive/20 dark:bg-input/30 dark:data-[invalid=true]:border-destructive/50 dark:data-[invalid=true]:ring-destructive/40',
        local.class,
      )}
      {...others}
    >
      {local.children}
    </RadioGroupPrimitive.ItemControl>
  );
};

export const RadioGroupItemText: Component<RadioGroupPrimitive.ItemTextProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <RadioGroupPrimitive.ItemText
      class={cn(
        'text-sm font-medium leading-none select-none data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-70',
        local.class,
      )}
      {...others}
    />
  );
};
