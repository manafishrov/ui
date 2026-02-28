import { PasswordInput as PrimitivePasswordInput } from '@ark-ui/solid/password-input';
import MdOutlineVisibility from '@icons/ic/outline-visibility';
import MdOutlineVisibility_off from '@icons/ic/outline-visibility-off';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const PasswordInput = PrimitivePasswordInput.Root;
export const PasswordInputContext = PrimitivePasswordInput.Context;

export const PasswordInputLabel: Component<PrimitivePasswordInput.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <PrimitivePasswordInput.Label
      class={cn(
        'gap-2 text-sm font-medium flex items-center leading-none select-none group-data-disabled:pointer-events-none group-data-disabled:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        local.class,
      )}
      {...others}
    />
  );
};

export const PasswordInputControl: Component<PrimitivePasswordInput.ControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <PrimitivePasswordInput.Control
      data-slot='password-input-control'
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

export const PasswordInputInput: Component<PrimitivePasswordInput.InputProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitivePasswordInput.Input
      class={cn(
        'min-w-0 text-base md:text-sm flex w-full bg-transparent transition-colors outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-readonly:cursor-default',
        'px-0 py-0 h-full border-none bg-transparent shadow-none ring-0 focus-visible:ring-0',
        'pl-2.5 pr-10',
        local.class,
      )}
      {...others}
    />
  );
};

export const PasswordInputVisibilityTrigger: Component<
  PrimitivePasswordInput.VisibilityTriggerProps
> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitivePasswordInput.VisibilityTrigger
      data-slot='password-input-visibility-trigger'
      class={cn(
        'top-0 right-0 w-9 absolute flex h-full cursor-pointer items-center justify-center text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground disabled:opacity-50',
        'data-focus:text-foreground',
        local.class,
      )}
      {...others}
    />
  );
};

export const PasswordInputIndicator: Component<PrimitivePasswordInput.IndicatorProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <PrimitivePasswordInput.Indicator
      class={cn(local.class)}
      fallback={local.children ?? <MdOutlineVisibility_off class='size-4' />}
      {...others}
    >
      <MdOutlineVisibility class='size-4' />
    </PrimitivePasswordInput.Indicator>
  );
};
