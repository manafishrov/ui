import type { Component } from 'solid-js';

import {
  H1,
  H2,
  H3,
  H4,
  P,
  Blockquote,
  List,
  InlineCode,
  Lead,
  Large,
  Small,
  Muted,
} from '@manafish/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

const TypographyDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Typography</h1>
      <p class='mt-2 text-muted-foreground'>Documentation for the Typography component.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <div class='space-y-4'>
        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
        <P>This is a paragraph.</P>
        <Muted>This is muted text.</Muted>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/typography')({
  component: TypographyDocPage,
});
