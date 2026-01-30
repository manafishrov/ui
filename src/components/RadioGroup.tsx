import { RadioGroup as RadioGroupPrimitive } from '@ark-ui/solid/radio-group';
import { MdFillCircle } from 'solid-icons/md';
import { type ComponentProps, type JSX, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export type RadioGroupProps = ComponentProps<typeof RadioGroupPrimitive.Root> & {
  label?: string;
};

export const RadioGroup = (props: RadioGroupProps): JSX.Element => {
  const [local, others] = splitProps(props, ['class', 'label', 'children']);

  return (
    <RadioGroupPrimitive.Root
      data-slot='radio-group'
      class={cn('grid gap-2 w-full', local.class)}
      {...others}
    >
      {typeof local.label === 'string' && (
        <RadioGroupPrimitive.Label class='text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
          {local.label}
        </RadioGroupPrimitive.Label>
      )}
      {local.children}
    </RadioGroupPrimitive.Root>
  );
};

export type RadioGroupItemProps = ComponentProps<typeof RadioGroupPrimitive.Item>;

export const RadioGroupItem = (props: RadioGroupItemProps): JSX.Element => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <RadioGroupPrimitive.Item
      data-slot='radio-group-item'
      class={cn(
        'group/radio-group-item peer relative flex size-4 aspect-square shrink-0 items-center justify-center rounded-full border border-input outline-none transition-all dark:bg-input/30 focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring data-disabled:cursor-not-allowed data-disabled:opacity-50 data-invalid:ring-[3px] data-invalid:ring-destructive/20 data-invalid:border-destructive dark:data-invalid:ring-destructive/40 dark:data-invalid:border-destructive/50',
        local.class,
      )}
      {...others}
    >
      <RadioGroupPrimitive.ItemControl class='flex size-4 items-center justify-center rounded-full'>
        <RadioGroupPrimitive.ItemContext>
          {(state) =>
            state().checked && (
              <MdFillCircle
                data-slot='radio-group-indicator'
                class='text-primary group-data-invalid/radio-group-item:text-destructive size-2 fill-current'
              />
            )
          }
        </RadioGroupPrimitive.ItemContext>
      </RadioGroupPrimitive.ItemControl>
      <RadioGroupPrimitive.ItemHiddenInput />
    </RadioGroupPrimitive.Item>
  );
};
