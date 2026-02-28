import type { Component } from 'solid-js';

import { Badge } from '@manafishrov/ui/badge';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const BadgeDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Badge</H1>
      <Lead>{m.docs_component_badge_description()}</Lead>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_variants()}</H2>
      <div class='gap-4 flex flex-wrap'>
        <Badge variant='default'>Default</Badge>
        <Badge variant='destructive'>Destructive</Badge>
        <Badge variant='outline'>Outline</Badge>
        <Badge variant='secondary'>Secondary</Badge>
        <Badge variant='ghost'>Ghost</Badge>
        <Badge variant='link'>Link</Badge>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/badge')({
  component: BadgeDocPage,
});
