import type { Component } from 'solid-js';

import { Spinner } from '@manafishrov/ui/spinner';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const SpinnerDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Spinner</H1>
      <Lead>{m.docs_component_spinner_description()}</Lead>
    </div>

    <div class='gap-4 flex flex-wrap'>
      <Spinner />
    </div>
  </div>
);

export const Route = createFileRoute('/components-spinner')({
  component: SpinnerDocPage,
});
