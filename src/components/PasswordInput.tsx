import { PasswordInput as PrimitivePasswordInput } from '@ark-ui/solid/password-input';
import { MdOutlineVisibility, MdOutlineVisibility_off } from 'solid-icons/md';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const PasswordInput = PrimitivePasswordInput.Root;

export const PasswordInputLabel: Component<PrimitivePasswordInput.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <PrimitivePasswordInput.Label
      data-slot='password-input-label'
      class={cn(
        'gap-2 text-sm leading-none font-medium group-data-disabled:opacity-50 flex items-center select-none',
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
        'border-input dark:bg-input/30 group/password-input-control relative flex w-full min-w-0 items-center rounded-lg border h-8 transition-colors outline-none overflow-hidden',
        'data-focus:border-ring data-focus:ring-ring/50 data-focus:ring-[3px]',
        'data-invalid:ring-destructive/20 data-invalid:border-destructive dark:data-invalid:ring-destructive/40 data-invalid:ring-[3px]',
        'data-disabled:bg-input/50 dark:data-disabled:bg-input/80 data-disabled:opacity-50',
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
      data-slot='password-input-input'
      class={cn(
        'rounded-none border-0 bg-transparent py-1 pl-2.5 pr-10 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent h-full flex-1 text-sm outline-none placeholder:text-muted-foreground',
        local.class,
      )}
      {...others}
    />
  );
};

export const PasswordInputVisibilityTrigger: Component<
  PrimitivePasswordInput.VisibilityTriggerProps
> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <PrimitivePasswordInput.VisibilityTrigger
      data-slot='password-input-visibility-trigger'
      class={cn(
        'text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-50 absolute top-0 right-0 flex h-full w-9 cursor-pointer items-center justify-center transition-colors outline-none focus-visible:bg-muted focus-visible:text-foreground',
        local.class,
      )}
      {...others}
    >
      {local.children ?? (
        <PrimitivePasswordInput.Indicator fallback={<MdOutlineVisibility_off class='size-4' />}>
          <MdOutlineVisibility class='size-4' />
        </PrimitivePasswordInput.Indicator>
      )}
    </PrimitivePasswordInput.VisibilityTrigger>
  );
};
