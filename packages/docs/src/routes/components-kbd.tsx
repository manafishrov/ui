import type { Component } from 'solid-js';

import { Kbd, KbdGroup } from '@manafishrov/ui/kbd';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const KbdDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Kbd</H1>
      <Lead>{m.docs_component_kbd_description()}</Lead>
    </div>
    <Kbd>⌘</Kbd> <Kbd>K</Kbd>
    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_group()}</H2>
      <KbdGroup>
        <Kbd>Shift</Kbd>
        <Kbd>⌘</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
    </div>
  </div>
);

export const Route = createFileRoute('/components-kbd')({
  component: KbdDocPage,
});
