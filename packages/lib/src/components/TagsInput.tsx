import { TagsInput as TagsInputPrimitive } from '@ark-ui/solid/tags-input';
import MdOutlineClose from '@icons/ic/outline-close';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

import { InputGroupButton } from '@/components/InputGroup';
export const TagsInput = TagsInputPrimitive.Root;
export const TagsInputContext = TagsInputPrimitive.Context;
export const TagsInputHiddenInput = TagsInputPrimitive.HiddenInput;
export const TagsInputLabel = TagsInputPrimitive.Label;

export const TagsInputControl: Component<TagsInputPrimitive.ControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <TagsInputPrimitive.Control
      class={cn(
        'min-h-9 gap-1.5 px-3 py-1.5 text-sm flex flex-wrap items-center rounded-lg border border-input bg-transparent bg-clip-padding transition-colors focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-invalid:border-destructive has-data-invalid:ring-[3px] has-data-invalid:ring-destructive/20 dark:has-data-invalid:border-destructive/50 dark:has-data-invalid:ring-destructive/40',
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
        'h-5.25 gap-1 px-1.5 font-medium has-data-[slot=tags-input-item-delete-trigger]:pr-0 flex w-fit items-center justify-center rounded-[calc(var(--radius-lg)-4px)] bg-muted text-[0.8rem] whitespace-nowrap text-foreground ring-1 ring-ring/10 transition-all data-highlighted:bg-accent data-highlighted:text-accent-foreground',
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
          {local.children ?? <MdOutlineClose class='size-3 pointer-events-none' />}
        </InputGroupButton>
      )}
    />
  );
};
