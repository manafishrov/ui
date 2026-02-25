import type { Component } from 'solid-js';

import { Label } from '@manafishrov/ui/label';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const LabelDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Label</H1>
      <Lead>{m.docs_component_label_description()}</Lead>
    </div>

    <div class='space-y-4'>
      <Label for='email'>Your email address</Label>
    </div>
  </div>
);

export const Route = createFileRoute('/components/label')({
  component: LabelDocPage,
});
