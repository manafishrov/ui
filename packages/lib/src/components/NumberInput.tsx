import { NumberInput as PrimitiveNumberInput } from '@ark-ui/solid/number-input';
import MdOutlineExpand_less from '@icons/ic/outline-expand-less';
import MdOutlineExpand_more from '@icons/ic/outline-expand-more';
import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const NumberInputContext = PrimitiveNumberInput.Context;

export const NumberInput: Component<PrimitiveNumberInput.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitiveNumberInput.Root
      class={cn('group/number-input gap-1.5 flex w-full flex-col', local.class)}
      {...others}
    />
  );
};

export const NumberInputLabel: Component<PrimitiveNumberInput.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitiveNumberInput.Label
      class={cn(
        'gap-2 text-sm font-medium flex items-center leading-none select-none group-data-disabled:pointer-events-none group-data-disabled:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
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
        'min-w-0 h-8 relative flex w-full items-center overflow-hidden rounded-lg border border-input transition-colors outline-none dark:bg-input/30',
        'data-focus:border-ring data-focus:ring-[3px] data-focus:ring-ring/50',
        'data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/20 dark:data-invalid:ring-destructive/40',
        'data-disabled:bg-input/50 data-disabled:opacity-50 dark:data-disabled:bg-input/80',
        'data-readonly:data-focus:border-input data-readonly:data-focus:ring-0',
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
      class={cn(
        'min-w-0 text-base md:text-sm flex w-full bg-transparent transition-colors outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-readonly:cursor-default',
        'px-0 py-0 h-full border-none bg-transparent shadow-none ring-0 focus-visible:ring-0',
        'pl-2.5 pr-2.5 group-has-data-[slot=number-input-triggers]/number-input:pr-8 transition-all',
        local.class,
      )}
      {...others}
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
            'top-0 right-0 absolute flex h-full flex-col border-l border-input transition-colors',
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
        'px-1 flex flex-1 cursor-pointer items-center justify-center border-b text-muted-foreground transition-colors last:border-b-0 hover:bg-muted hover:text-foreground disabled:opacity-50',
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
        'px-1 flex flex-1 cursor-pointer items-center justify-center border-b text-muted-foreground transition-colors last:border-b-0 hover:bg-muted hover:text-foreground disabled:opacity-50',
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
