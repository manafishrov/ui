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
import { createFileRoute } from '@tanstack/solid-router';

const EmptyDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Empty</h1>
      <p class='mt-2 text-muted-foreground'>
        Display an empty state when there is no data to show.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
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
  </div>
);

export const Route = createFileRoute('/components/empty')({
  component: EmptyDocPage,
});
