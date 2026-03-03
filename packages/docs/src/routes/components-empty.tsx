import type { Component } from 'solid-js';

import { Button } from '@manafishrov/ui/button';
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from '@manafishrov/ui/empty';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const EmptyDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Empty</H1>
      <Lead>{m.docs_component_empty_description()}</Lead>
    </div>

    <Empty>
      <EmptyMedia>
        <div class='h-20 w-20 flex items-center justify-center rounded-full bg-muted'>📭</div>
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription>You haven't created any items yet.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create Item</Button>
      </EmptyContent>
    </Empty>
  </div>
);

export const Route = createFileRoute('/components-empty')({
  component: EmptyDocPage,
});
