import type { Component } from 'solid-js';

import {
  Blockquote,
  H1,
  H2,
  H3,
  H4,
  InlineCode,
  Large,
  Lead,
  List,
  Muted,
  P,
  Small,
} from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const TypographyDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Typography</H1>
      <Lead>{m.docs_component_typography_description()}</Lead>
    </div>

    <div class='space-y-8'>
      <div class='gap-4 grid'>
        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
        <H4>Heading 4</H4>
      </div>

      <div class='gap-4 grid'>
        <P>
          The king, seeing how much happier his subjects were, realized the error of his ways and
          repealed the joke tax.
        </P>
        <Lead>
          A modal dialog that interrupts the user with important content and expects a response.
        </Lead>
        <Large>Are you absolutely sure?</Large>
        <Small>Email address</Small>
        <Muted>Enter your email address.</Muted>
      </div>

      <div class='gap-4 grid'>
        <Blockquote>
          "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay
          for the privilege."
        </Blockquote>

        <List>
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </List>

        <P>
          Use <InlineCode>@manafishrov/ui</InlineCode> to build your component library.
        </P>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/typography')({
  component: TypographyDocPage,
});
