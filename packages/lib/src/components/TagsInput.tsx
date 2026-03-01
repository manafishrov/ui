import { TagsInput as TagsInputPrimitive } from '@ark-ui/solid/tags-input';
import { type Component, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';
import OutlineCloseIcon from '~icons/ic/outline-close';

export const TagsInput = TagsInputPrimitive.Root;
export const TagsInputContext = TagsInputPrimitive.Context;
export const TagsInputHiddenInput = TagsInputPrimitive.HiddenInput;
export const TagsInputLabel: Component<TagsInputPrimitive.LabelProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <TagsInputPrimitive.Label
      class={cn(
        'mb-1 gap-2 text-sm font-medium flex items-center leading-none select-none group-data-disabled:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        local.class,
      )}
      {...others}
    />
  );
};
export const TagsInputControl: Component<TagsInputPrimitive.ControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <TagsInputPrimitive.Control
      class={cn(
        'group min-h-10 py-1.5 pr-2 pl-2.5 text-sm [&_svg:not([class*="size-"])]:size-4 gap-1 shadow-sm flex w-full flex-wrap items-center rounded-lg border border-input bg-transparent transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30 dark:hover:bg-input/50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
        'focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50',
        'data-[invalid=true]:border-destructive data-[invalid=true]:ring-[3px] data-[invalid=true]:ring-destructive/20 dark:data-[invalid=true]:ring-destructive/40',
        'data-[disabled=true]:bg-input/50 data-[disabled=true]:opacity-50 dark:data-[disabled=true]:bg-input/80',
        'data-[readonly=true]:focus-within:border-input data-[readonly=true]:focus-within:ring-0',
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
      class={cn(
        'p-0.5 rounded-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
        local.class,
      )}
      {...others}
    >
      {local.children ?? <OutlineCloseIcon class='size-3.5' />}
    </TagsInputPrimitive.ClearTrigger>
  );
};

export const TagsInputItem: Component<TagsInputPrimitive.ItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <TagsInputPrimitive.Item
      class={cn(
        'h-6 gap-1 px-1.5 text-xs font-medium has-data-[slot=tags-input-item-delete-trigger]:pr-0 flex w-fit items-center justify-center rounded-md bg-muted whitespace-nowrap text-foreground data-disabled:pointer-events-none data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
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
      class={cn('-ml-1', local.class)}
      {...others}
    >
      <button
        type='button'
        class='p-0.5 inline-flex items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground'
      >
        {local.children ?? <OutlineCloseIcon class='size-3 pointer-events-none' />}
      </button>
    </TagsInputPrimitive.ItemDeleteTrigger>
  );
};
