import { NumberInput as PrimitiveNumberInput } from '@ark-ui/solid/number-input';
import { MdOutlineExpand_less, MdOutlineExpand_more } from 'solid-icons/md';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const NumberInput = PrimitiveNumberInput.Root;

export const NumberInputLabel: Component<PrimitiveNumberInput.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitiveNumberInput.Label
      data-slot='number-input-label'
      class={cn(
        'gap-2 text-sm leading-none font-medium group-data-disabled:opacity-50 flex items-center select-none',
        local.class,
      )}
      {...others}
    />
  );
};

export const NumberInputControl: Component<PrimitiveNumberInput.ControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <PrimitiveNumberInput.Control
      data-slot='number-input-control'
      class={cn(
        'border-input dark:bg-input/30 group/number-input-control relative flex w-full min-w-0 items-center rounded-lg border h-8 transition-colors outline-none overflow-hidden',
        'data-focus:border-ring data-focus:ring-ring/50 data-focus:ring-[3px]',
        'data-invalid:ring-destructive/20 data-invalid:border-destructive dark:data-invalid:ring-destructive/40 data-invalid:ring-[3px]',
        'data-disabled:bg-input/50 dark:data-disabled:bg-input/80 data-disabled:opacity-50',
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
      data-slot='number-input-input'
      class={cn(
        'rounded-none border-0 bg-transparent py-1 pl-2.5 pr-2.5 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent h-full flex-1 text-sm outline-none placeholder:text-muted-foreground transition-all',
        'group-has-data-[slot=number-input-trigger-group]/number-input-control:pr-8',
        local.class,
      )}
      {...others}
    />
  );
};

export const NumberInputTriggerGroup: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <div
      data-slot='number-input-trigger-group'
      class={cn(
        'border-input absolute top-0 right-0 flex h-full flex-col border-l transition-colors',
        'group-data-focus/number-input-control:border-ring group-data-invalid/number-input-control:border-destructive',
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
