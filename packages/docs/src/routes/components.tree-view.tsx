import {
  TreeView,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchControl,
  TreeViewItem,
  TreeViewLabel,
  TreeViewNodeProvider,
  TreeViewTree,
  createTreeCollection,
} from '@manafishrov/ui/tree-view';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';
import { For, type Component } from 'solid-js';

import * as m from '@/paraglide/messages';

type Node = {
  id: string;
  name: string;
  children?: Node[];
};

const TreeNode: Component<{ node: Node; indexPath: number[] }> = (props) => (
  <TreeViewNodeProvider node={props.node} indexPath={props.indexPath}>
    {props.node.children ? (
      <TreeViewBranch>
        <TreeViewBranchControl>{props.node.name}</TreeViewBranchControl>
        <TreeViewBranchContent>
          <For each={props.node.children || []}>
            {(child, index) => <TreeNode node={child} indexPath={[...props.indexPath, index()]} />}
          </For>
        </TreeViewBranchContent>
      </TreeViewBranch>
    ) : (
      <TreeViewItem>{props.node.name}</TreeViewItem>
    )}
  </TreeViewNodeProvider>
);
const collection = createTreeCollection<Node>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: 'ROOT',
    name: '',
    children: [
      {
        id: 'node_modules',
        name: 'node_modules',
        children: [
          { id: 'node_modules/zag-js', name: 'zag-js' },
          { id: 'node_modules/pandacss', name: 'panda' },
          {
            id: 'node_modules/@types',
            name: '@types',
            children: [
              { id: 'node_modules/@types/react', name: 'react' },
              { id: 'node_modules/@types/react-dom', name: 'react-dom' },
            ],
          },
        ],
      },
      {
        id: 'src',
        name: 'src',
        children: [
          { id: 'src/app.tsx', name: 'app.tsx' },
          { id: 'src/index.ts', name: 'index.ts' },
        ],
      },
      { id: 'panda.config', name: 'panda.config.ts' },
      { id: 'package.json', name: 'package.json' },
      { id: 'renovate.json', name: 'renovate.json' },
      { id: 'readme.md', name: 'README.md' },
    ],
  },
});

const TreeViewDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Tree View</H1>
      <Lead>{m.docs_component_tree_view_description()}</Lead>
    </div>

    <div class='gap-4 flex flex-wrap'>
      <TreeView collection={collection}>
        <TreeViewLabel>Tree</TreeViewLabel>
        <TreeViewTree>
          <For each={collection.rootNode.children || []}>
            {(node, index) => <TreeNode node={node} indexPath={[index()]} />}
          </For>
        </TreeViewTree>
      </TreeView>
    </div>
  </div>
);

export const Route = createFileRoute('/components/tree-view')({
  component: TreeViewDocPage,
});
