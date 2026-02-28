import type { Component } from 'solid-js';

import { Link } from '@manafishrov/ui/link';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const LinkDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Link</H1>
      <Lead>{m.docs_component_link_description()}</Lead>
    </div>

    <Link href='#'>Click me to go somewhere</Link>
  </div>
);

export const Route = createFileRoute('/components/link')({
  component: LinkDocPage,
});
