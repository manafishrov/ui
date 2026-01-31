import { NumberInput as PrimitiveNumberInput } from '@ark-ui/solid/number-input';
import { MdOutlineExpand_less, MdOutlineExpand_more } from 'solid-icons/md';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { Input } from '@/components/Input';
import { Label } from '@/components/Label';

export const NumberInputContext = PrimitiveNumberInput.Context;

export const NumberInput: Component<PrimitiveNumberInput.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitiveNumberInput.Root
      class={cn('group/number-input flex w-full flex-col gap-1.5', local.class)}
      {...others}
    />
  );
};

export const NumberInputLabel: Component<PrimitiveNumberInput.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <PrimitiveNumberInput.Label
      asChild={(labelProps) => (
        <Label class={cn(local.class)} {...labelProps()} {...others}>
          {local.children}
        </Label>
      )}
    />
  );
};

export const NumberInputControl: Component<PrimitiveNumberInput.ControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <PrimitiveNumberInput.Control
      data-slot='number-input-control'
      class={cn(
        'border-input dark:bg-input/30 relative flex w-full min-w-0 items-center rounded-lg border h-8 transition-colors outline-none overflow-hidden',
        'data-focus:border-ring data-focus:ring-ring/50 data-focus:ring-[3px]',
        'data-invalid:border-destructive data-invalid:ring-destructive/20 dark:data-invalid:ring-destructive/40 data-invalid:ring-[3px]',
        'data-disabled:bg-input/50 dark:data-disabled:bg-input/80 data-disabled:opacity-50',
        'data-readonly:data-focus:ring-0 data-readonly:data-focus:border-input',
        local.class,
      )}
      {...others}
    />
  );
};

export const NumberInputInput: Component<PrimitiveNumberInput.InputProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitiveNumberInput.Input
      asChild={(inputProps) => (
        <Input
          variant='ghost'
          class={cn(
            'pl-2.5 pr-2.5 transition-all group-has-data-[slot=number-input-triggers]/number-input:pr-8',
            local.class,
          )}
          {...inputProps()}
          {...others}
        />
      )}
    />
  );
};

export const NumberInputTriggers: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <PrimitiveNumberInput.Context>
      {(api) => (
        <div
          data-slot='number-input-triggers'
          data-focus={api().focused ? '' : false}
          data-invalid={api().invalid ? '' : false}
          class={cn(
            'border-input absolute top-0 right-0 flex h-full flex-col border-l transition-colors',
            'data-focus:border-ring data-invalid:border-destructive',
            local.class,
          )}
          {...others}
        >
          {local.children ?? (
            <>
              <NumberInputIncrementTrigger />
              <NumberInputDecrementTrigger />
            </>
          )}
        </div>
      )}
    </PrimitiveNumberInput.Context>
  );
};

export const NumberInputIncrementTrigger: Component<PrimitiveNumberInput.IncrementTriggerProps> = (
  props,
) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <PrimitiveNumberInput.IncrementTrigger
      data-slot='number-input-increment-trigger'
      class={cn(
        'text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-50 flex flex-1 cursor-pointer items-center justify-center border-b px-1 transition-colors last:border-b-0',
        local.class,
      )}
      {...others}
    >
      {local.children ?? <MdOutlineExpand_less class='size-3.5' />}
    </PrimitiveNumberInput.IncrementTrigger>
  );
};

export const NumberInputDecrementTrigger: Component<PrimitiveNumberInput.DecrementTriggerProps> = (
  props,
) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <PrimitiveNumberInput.DecrementTrigger
      data-slot='number-input-decrement-trigger'
      class={cn(
        'text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-50 flex flex-1 cursor-pointer items-center justify-center border-b px-1 transition-colors last:border-b-0',
        local.class,
      )}
      {...others}
    >
      {local.children ?? <MdOutlineExpand_more class='size-3.5' />}
    </PrimitiveNumberInput.DecrementTrigger>
  );
};

export const NumberInputScrubber: Component<PrimitiveNumberInput.ScrubberProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitiveNumberInput.Scrubber
      data-slot='number-input-scrubber'
      class={cn('cursor-ew-resize', local.class)}
      {...others}
    />
  );
};

export const NumberInputValueText: Component<PrimitiveNumberInput.ValueTextProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitiveNumberInput.ValueText
      data-slot='number-input-value-text'
      class={cn('text-sm', local.class)}
      {...others}
    />
  );
};
