import { TagsInput as TagsInputPrimitive } from '@ark-ui/solid/tags-input';
import { MdOutlineClose } from 'solid-icons/md';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { InputGroupButton } from '@/components/Input';

export const TagsInput = TagsInputPrimitive.Root;
export const TagsInputContext = TagsInputPrimitive.Context;
export const TagsInputHiddenInput = TagsInputPrimitive.HiddenInput;
export const TagsInputLabel = TagsInputPrimitive.Label;

export const TagsInputControl: Component<TagsInputPrimitive.ControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <TagsInputPrimitive.Control
      class={cn(
        'border-input focus-within:border-ring focus-within:ring-ring/50 has-data-invalid:ring-destructive/20 dark:has-data-invalid:ring-destructive/40 has-data-invalid:border-destructive dark:has-data-invalid:border-destructive/50 flex min-h-9 flex-wrap items-center gap-1.5 rounded-lg border bg-transparent bg-clip-padding px-3 py-1.5 text-sm transition-colors focus-within:ring-[3px] has-data-invalid:ring-[3px] has-disabled:cursor-not-allowed has-disabled:opacity-50',
        local.class,
      )}
      {...others}
    >
      {local.children}
    </TagsInputPrimitive.Control>
  );
};

export const TagsInputInput: Component<TagsInputPrimitive.InputProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <TagsInputPrimitive.Input
      class={cn(
        'min-w-16 flex-1 bg-transparent outline-none placeholder:text-muted-foreground',
        local.class,
      )}
      {...others}
    />
  );
};

export const TagsInputClearTrigger: Component<TagsInputPrimitive.ClearTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <TagsInputPrimitive.ClearTrigger
      class={cn(local.class)}
      asChild={(triggerProps) => (
        <InputGroupButton variant='ghost' size='icon-xs' {...triggerProps()} {...others}>
          {local.children ?? <MdOutlineClose class='pointer-events-none' />}
        </InputGroupButton>
      )}
    />
  );
};

export const TagsInputItem: Component<TagsInputPrimitive.ItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <TagsInputPrimitive.Item
      class={cn(
        'bg-muted ring-ring/10 text-foreground data-highlighted:bg-accent data-highlighted:text-accent-foreground flex h-5.25 w-fit items-center justify-center gap-1 rounded-[calc(var(--radius-lg)-4px)] px-1.5 text-[0.8rem] font-medium whitespace-nowrap ring-1 transition-all has-data-[slot=tags-input-item-delete-trigger]:pr-0',
        local.class,
      )}
      {...others}
    >
      <TagsInputPrimitive.ItemText>{local.children}</TagsInputPrimitive.ItemText>
      <TagsInputPrimitive.ItemInput class='pointer-events-none hidden' />
    </TagsInputPrimitive.Item>
  );
};

export const TagsInputItemDeleteTrigger: Component<TagsInputPrimitive.ItemDeleteTriggerProps> = (
  props,
) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <TagsInputPrimitive.ItemDeleteTrigger
      data-slot='tags-input-item-delete-trigger'
      class={cn('-ml-1 opacity-50 hover:opacity-100', local.class)}
      asChild={(triggerProps) => (
        <InputGroupButton
          variant='ghost'
          size='icon-xs'
          {...triggerProps()}
          {...others}
          class='size-4 rounded-[calc(var(--radius-lg)-6px)]'
        >
          {local.children ?? <MdOutlineClose class='pointer-events-none size-3' />}
        </InputGroupButton>
      )}
    />
  );
};
