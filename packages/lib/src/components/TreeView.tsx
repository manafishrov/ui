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
  return <TreeViewPrimitive.Tree class={cn('gap-1 flex flex-col', local.class)} {...others} />;
};

export const TreeViewItem: Component<TreeViewPrimitive.ItemProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children']);
  return (
    <TreeViewPrimitive.Item
      class={cn(
        'gap-2 px-2 py-1.5 text-sm relative flex cursor-pointer items-center rounded-md transition-colors outline-none select-none hover:bg-accent/50 hover:text-accent-foreground/50 disabled:pointer-events-none disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground',
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
        'gap-2 px-2 py-1.5 text-sm flex cursor-pointer items-center rounded-md transition-colors outline-none select-none hover:bg-accent/50 hover:text-accent-foreground/50 disabled:pointer-events-none disabled:opacity-50',
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
