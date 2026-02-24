import type { Component } from 'solid-js';

import {
  TreeView,
  TreeViewLabel,
  TreeViewNodeProvider,
  TreeViewTree,
  TreeViewItem,
  TreeViewBranch,
  TreeViewBranchControl,
  TreeViewBranchContent,
} from '@manafishrov/ui/tree-view';
import { createFileRoute } from '@tanstack/solid-router';

const TreeViewDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>TreeView</h1>
      <p class='mt-2 text-muted-foreground'>Documentation for the TreeView component.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <div class='gap-4 flex flex-wrap'>
        <TreeView>Example</TreeView>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/tree-view')({
  component: TreeViewDocPage,
});
