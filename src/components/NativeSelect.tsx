import { MdOutlineExpand_more } from 'solid-icons/md';
import { type Component, type ComponentProps, splitProps, type JSX } from 'solid-js';
import { cn } from 'tailwind-variants';

export type NativeSelectProps = Omit<ComponentProps<'select'>, 'size'> & {
  size?: 'sm' | 'default';
};

export const NativeSelect: Component<NativeSelectProps> = (props): JSX.Element => {
  const [local, others] = splitProps(props, ['class', 'size', 'children']);

  return (
    <div
      class={cn('group/native-select relative w-fit has-disabled:opacity-50', local.class)}
      data-slot='native-select-wrapper'
      data-size={local.size ?? 'default'}
    >
      <select
        data-slot='native-select'
        data-size={local.size ?? 'default'}
        class={cn(
          'border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-8 w-full min-w-0 appearance-none rounded-lg border bg-transparent py-1 pr-8 pl-2.5 text-sm transition-colors select-none focus-visible:ring-[3px] aria-invalid:ring-[3px] outline-none disabled:pointer-events-none disabled:cursor-not-allowed',
          'data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-[size=sm]:py-0.5',
        )}
        {...others}
      >
        {local.children}
      </select>
      <MdOutlineExpand_more
        class='text-muted-foreground pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 select-none'
        aria-hidden='true'
        data-slot='native-select-icon'
      />
    </div>
  );
};

export const NativeSelectOption: Component<ComponentProps<'option'>> = (props): JSX.Element => (
  <option data-slot='native-select-option' {...props} />
);

export const NativeSelectOptGroup: Component<ComponentProps<'optgroup'>> = (props): JSX.Element => {
  const [local, others] = splitProps(props, ['class']);
  return <optgroup data-slot='native-select-optgroup' class={cn(local.class)} {...others} />;
};
