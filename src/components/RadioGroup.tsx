import { RadioGroup as RadioGroupPrimitive } from '@ark-ui/solid/radio-group';
import { MdFillCircle } from 'solid-icons/md';
import { type Component, Show, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { Label } from '@/components/Label';

export type RadioGroupProps = RadioGroupPrimitive.RootProps & {
  label?: string;
};

export const RadioGroup: Component<RadioGroupProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'label', 'children']);

  return (
    <RadioGroupPrimitive.Root
      data-slot='radio-group'
      class={cn('group/radio-group grid gap-2 w-full', local.class)}
      {...others}
    >
      <Show when={local.label}>
        <RadioGroupPrimitive.Label
          asChild={(labelProps) => (
            <Label
              class='group-data-disabled/radio-group:cursor-not-allowed group-data-disabled/radio-group:opacity-70'
              {...labelProps()}
            >
              {local.label}
            </Label>
          )}
        />
      </Show>
      {local.children}
    </RadioGroupPrimitive.Root>
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
      <RadioGroupPrimitive.ItemControl
        class={cn(
          'border-input text-primary dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 data-invalid:ring-destructive/20 dark:data-invalid:ring-destructive/40 data-invalid:border-destructive dark:data-invalid:border-destructive/50 flex size-4 rounded-full focus-visible:ring-[3px] data-invalid:ring-[3px] group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50',
        )}
      >
        <RadioGroupPrimitive.ItemContext>
          {(state) => (
            <Show when={state().checked}>
              <div
                data-slot='radio-group-indicator'
                class='group-data-invalid/radio-group-item:text-destructive text-primary flex size-4 items-center justify-center'
              >
                <MdFillCircle class='absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-current' />
              </div>
            </Show>
          )}
        </RadioGroupPrimitive.ItemContext>
      </RadioGroupPrimitive.ItemControl>
      <RadioGroupPrimitive.ItemText class='text-sm leading-none font-medium select-none group-data-disabled/radio-group-item:cursor-not-allowed group-data-disabled/radio-group-item:opacity-70'>
        {local.children}
      </RadioGroupPrimitive.ItemText>
      <RadioGroupPrimitive.ItemHiddenInput />
    </RadioGroupPrimitive.Item>
  );
};
