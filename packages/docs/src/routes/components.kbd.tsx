import type { Component } from 'solid-js';

import { Kbd, KbdGroup } from '@manafishrov/ui/kbd';
import { createFileRoute } from '@tanstack/solid-router';

const KbdDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Kbd</h1>
      <p class='mt-2 text-muted-foreground'>A keyboard shortcut indicator.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <Kbd>⌘</Kbd> <Kbd>K</Kbd>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Group</h2>
      <KbdGroup>
        <Kbd>Shift</Kbd>
        <Kbd>⌘</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
    </div>
  </div>
);

export const Route = createFileRoute('/components/kbd')({
  component: KbdDocPage,
});
