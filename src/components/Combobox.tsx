import { Combobox as ComboboxPrimitive, createListCollection } from '@ark-ui/solid/combobox';
import { MdOutlineCheck, MdOutlineClose, MdOutlineExpand_more } from 'solid-icons/md';
import { type Component, type ComponentProps, Show, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { Button } from '@/components/Button';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/Input';

export const Combobox = ComboboxPrimitive.Root;
export const ComboboxLabel = ComboboxPrimitive.Label;
export const ComboboxContext = ComboboxPrimitive.Context;
export const ComboboxList = ComboboxPrimitive.List;
export { createListCollection };

export const ComboboxTrigger: Component<ComboboxPrimitive.TriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <ComboboxPrimitive.Trigger
      data-slot='combobox-trigger'
      class={cn("[&_svg:not([class*='size-'])]:size-4", local.class)}
      {...others}
    >
      {local.children}
      <MdOutlineExpand_more class='text-muted-foreground pointer-events-none size-4' />
    </ComboboxPrimitive.Trigger>
  );
};

export const ComboboxClearTrigger: Component<ComboboxPrimitive.ClearTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <ComboboxPrimitive.ClearTrigger
      data-slot='combobox-clear'
      class={cn(local.class)}
      asChild={(triggerProps) => (
        <InputGroupButton variant='ghost' size='icon-xs' {...triggerProps()} {...others}>
          {local.children ?? <MdOutlineClose class='pointer-events-none' />}
        </InputGroupButton>
      )}
    />
  );
};

export const ComboboxInput: Component<
  ComboboxPrimitive.InputProps & {
    showTrigger?: boolean;
    showClear?: boolean;
  }
> = (props) => {
  const [local, others] = splitProps(props, [
    'class',
    'children',
    'showTrigger',
    'showClear',
    'disabled',
  ]);

  return (
    <InputGroup class={cn('w-auto', local.class)}>
      <ComboboxPrimitive.Input
        asChild={(inputProps) => (
          <InputGroupInput disabled={local.disabled} {...inputProps()} {...others} />
        )}
      />
      <InputGroupAddon align='inline-end'>
        <Show when={local.showTrigger !== false}>
          <ComboboxPrimitive.Trigger
            asChild={(triggerProps) => (
              <InputGroupButton
                size='icon-xs'
                variant='ghost'
                data-slot='input-group-button'
                class='group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent'
                disabled={local.disabled}
                {...triggerProps()}
              >
                <MdOutlineExpand_more class='text-muted-foreground pointer-events-none size-4' />
              </InputGroupButton>
            )}
          />
        </Show>
        <Show when={local.showClear}>
          <ComboboxClearTrigger disabled={local.disabled} />
        </Show>
      </InputGroupAddon>
      {local.children}
    </InputGroup>
  );
};

export const ComboboxContent: Component<ComboboxPrimitive.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ComboboxPrimitive.Positioner class='isolate z-50'>
      <ComboboxPrimitive.Content
        data-slot='combobox-content'
        class={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:border-input/30 overflow-hidden rounded-lg shadow-md ring-1 duration-100 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:shadow-none data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 group/combobox-content relative max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+var(--spacing-7))] origin-(--transform-origin) data-[chips=true]:min-w-(--anchor-width)',
          local.class,
        )}
        {...others}
      />
    </ComboboxPrimitive.Positioner>
  );
};

export const ComboboxItem: Component<ComboboxPrimitive.ItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <ComboboxPrimitive.Item
      data-slot='combobox-item'
      class={cn(
        'data-highlighted:bg-accent data-highlighted:text-accent-foreground gap-2 rounded-md py-1 pr-8 pl-1.5 text-sm [&_svg:not([class*="size-"])]:size-4 relative flex w-full cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
        local.class,
      )}
      {...others}
    >
      <ComboboxPrimitive.ItemText>{local.children}</ComboboxPrimitive.ItemText>
      <ComboboxPrimitive.ItemIndicator class='pointer-events-none absolute right-2 flex size-4 items-center justify-center'>
        <MdOutlineCheck class='pointer-events-none' />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  );
};

export const ComboboxItemGroup: Component<ComboboxPrimitive.ItemGroupProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ComboboxPrimitive.ItemGroup data-slot='combobox-group' class={cn(local.class)} {...others} />
  );
};

export const ComboboxItemGroupLabel: Component<ComboboxPrimitive.ItemGroupLabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ComboboxPrimitive.ItemGroupLabel
      data-slot='combobox-label'
      class={cn('text-muted-foreground px-2 py-1.5 text-xs', local.class)}
      {...others}
    />
  );
};

export const ComboboxEmpty: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='combobox-empty'
      class={cn(
        'text-muted-foreground hidden w-full justify-center py-2 text-center text-sm group-data-empty/combobox-content:flex',
        local.class,
      )}
      {...others}
    />
  );
};

export const ComboboxSeparator: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='combobox-separator'
      class={cn('bg-border -mx-1 my-1 h-px', local.class)}
      {...others}
    />
  );
};

export const ComboboxChips: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <div
      data-slot='combobox-chips'
      class={cn(
        'dark:bg-input/30 border-input focus-within:border-ring focus-within:ring-ring/50 has-data-invalid:ring-destructive/20 dark:has-data-invalid:ring-destructive/40 has-data-invalid:border-destructive dark:has-data-invalid:border-destructive/50 flex min-h-8 flex-wrap items-center gap-1 rounded-lg border bg-transparent bg-clip-padding px-2.5 py-1 text-sm transition-colors focus-within:ring-[3px] has-data-invalid:ring-[3px] has-data-[slot=combobox-chip]:px-1',
        local.class,
      )}
      {...others}
    />
  );
};

export const ComboboxChip: Component<ComponentProps<'div'> & { showRemove?: boolean }> = (
  props,
) => {
  const [local, others] = splitProps(props, ['class', 'children', 'showRemove']);
  return (
    <div
      data-slot='combobox-chip'
      class={cn(
        'bg-muted text-foreground flex h-5.25 w-fit items-center justify-center gap-1 rounded-sm px-1.5 text-xs font-medium whitespace-nowrap has-data-[slot=combobox-chip-remove]:pr-0 has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50',
        local.class,
      )}
      {...others}
    >
      {local.children}
      <Show when={local.showRemove !== false}>
        <div class='-ml-1 opacity-50 hover:opacity-100' data-slot='combobox-chip-remove'>
          <Button variant='ghost' size='icon-xs'>
            <MdOutlineClose class='pointer-events-none' />
          </Button>
        </div>
      </Show>
    </div>
  );
};

export const ComboboxChipsInput: Component<ComboboxPrimitive.InputProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <ComboboxPrimitive.Input
      asChild={(inputProps) => (
        <input
          data-slot='combobox-chip-input'
          class={cn('min-w-16 flex-1 outline-none bg-transparent', local.class)}
          {...inputProps()}
          {...others}
        />
      )}
    />
  );
};
