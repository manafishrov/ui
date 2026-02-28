import type { Component } from 'solid-js';

import { TreeView } from '@manafishrov/ui/tree-view';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const TreeViewDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Tree View</H1>
      <Lead>{m.docs_component_tree_view_description()}</Lead>
    </div>

    <div class='gap-4 flex flex-wrap'>
      <TreeView>Example</TreeView>
    </div>
  </div>
);

export const Route = createFileRoute('/components/tree-view')({
  component: TreeViewDocPage,
});
