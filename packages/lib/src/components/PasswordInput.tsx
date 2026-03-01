import { PasswordInput as PrimitivePasswordInput } from '@ark-ui/solid/password-input';
import { splitProps, type Component } from 'solid-js';
import { cn } from 'tailwind-variants';
import OutlineVisibilityIcon from '~icons/ic/outline-visibility';
import OutlineVisibilityOffIcon from '~icons/ic/outline-visibility-off';
export const PasswordInput: Component<PrimitivePasswordInput.RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitivePasswordInput.Root
      class={cn('group/password-input flex w-full flex-col gap-1.5', local.class)}
      {...others}
    />
  );
};

export const PasswordInputContext = PrimitivePasswordInput.Context;

export const PasswordInputLabel: Component<PrimitivePasswordInput.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitivePasswordInput.Label
      class={cn(
        'gap-2 text-sm font-medium flex items-center leading-none select-none group-data-disabled:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
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
        'focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50',
        'data-[invalid=true]:border-destructive data-[invalid=true]:ring-[3px] data-[invalid=true]:ring-destructive/20 dark:data-[invalid=true]:ring-destructive/40',
        'data-[disabled=true]:bg-input/50 data-[disabled=true]:opacity-50 dark:data-[disabled=true]:bg-input/80',
        'data-[readonly=true]:focus-within:border-input data-[readonly=true]:focus-within:ring-0',
        'data-[invalid=true]:border-destructive data-[invalid=true]:ring-[3px] data-[invalid=true]:ring-destructive/20 dark:data-[invalid=true]:ring-destructive/40',
        'data-[disabled=true]:bg-input/50 data-[disabled=true]:opacity-50 dark:data-[disabled=true]:bg-input/80',
        'data-[readonly=true]:focus-within:border-input data-[readonly=true]:focus-within:ring-0',
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
        'min-w-0 text-base md:text-sm flex w-full bg-transparent transition-colors outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-[readonly=true]:cursor-default',
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
      fallback={local.children ?? <OutlineVisibilityOffIcon class='size-4' />}
      {...others}
    >
      <OutlineVisibilityIcon class='size-4' />
    </PrimitivePasswordInput.Indicator>
  );
};
