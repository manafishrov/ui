import { TreeView as TreeViewPrimitive, createTreeCollection } from '@ark-ui/solid/tree-view';
import { MdOutlineChevron_right } from 'solid-icons/md';
import { type Component, Show, splitProps } from 'solid-js';
import { cn } from 'tailwind-variants';

export const TreeView = TreeViewPrimitive.Root;
export const TreeViewLabel = TreeViewPrimitive.Label;
export const TreeViewNodeProvider = TreeViewPrimitive.NodeProvider;
export { createTreeCollection };

export const TreeViewTree: Component<TreeViewPrimitive.TreeProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <TreeViewPrimitive.Tree class={cn('flex flex-col gap-1', local.class)} {...others} />;
};

export const TreeViewItem: Component<TreeViewPrimitive.ItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <TreeViewPrimitive.Item
      class={cn(
        'data-selected:bg-accent data-selected:text-accent-foreground hover:bg-accent/50 hover:text-accent-foreground/50 relative flex cursor-pointer select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none transition-colors disabled:pointer-events-none disabled:opacity-50',
        local.class,
      )}
      {...others}
    >
      <Show when={local.children} fallback={<TreeViewPrimitive.ItemText />}>
        {local.children}
      </Show>
    </TreeViewPrimitive.Item>
  );
};

export const TreeViewBranch: Component<TreeViewPrimitive.BranchProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <TreeViewPrimitive.Branch class={cn('relative', local.class)} {...others} />;
};

export const TreeViewBranchControl: Component<TreeViewPrimitive.BranchControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <TreeViewPrimitive.BranchControl
      class={cn(
        'hover:bg-accent/50 hover:text-accent-foreground/50 flex cursor-pointer select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none transition-colors disabled:pointer-events-none disabled:opacity-50',
        local.class,
      )}
      {...others}
    >
      <TreeViewPrimitive.BranchIndicator class='text-muted-foreground transition-transform data-[state=open]:rotate-90'>
        <MdOutlineChevron_right class='size-4' />
      </TreeViewPrimitive.BranchIndicator>
      <Show when={local.children} fallback={<TreeViewPrimitive.BranchText />}>
        {local.children}
      </Show>
    </TreeViewPrimitive.BranchControl>
  );
};

export const TreeViewBranchContent: Component<TreeViewPrimitive.BranchContentProps> = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return (
    <TreeViewPrimitive.BranchContent
      class={cn('pl-4 relative duration-200', local.class)}
      {...others}
    />
  );
};
