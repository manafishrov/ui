import type { Component } from 'solid-js';

import { Textarea } from '@manafishrov/ui/textarea';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const TextareaDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Textarea</H1>
      <Lead>{m.docs_component_textarea_description()}</Lead>
    </div>

    <div class='space-y-4'>
      <div class='gap-4 max-w-sm flex flex-wrap'>
        <Textarea placeholder='Type your message here.' />
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/textarea')({
  component: TextareaDocPage,
});
