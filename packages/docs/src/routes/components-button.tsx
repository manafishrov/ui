import type { Component } from 'solid-js';

import { Button, ButtonGroup, ButtonGroupText, ButtonGroupSeparator } from '@manafishrov/ui/button';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const ButtonGroupExamples: Component = () => (
  <div class='space-y-4'>
    <H2 class='pb-0 border-none'>{m.docs_example_group()}</H2>
    <ButtonGroup>
      <Button variant='outline'>First</Button>
      <ButtonGroupText>Or</ButtonGroupText>
      <Button variant='outline'>Second</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button variant='outline'>Archive</Button>
      <Button variant='outline'>Report</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button variant='secondary' size='sm'>
        Copy
      </Button>
      <ButtonGroupSeparator />
      <Button variant='secondary' size='sm'>
        Paste
      </Button>
    </ButtonGroup>
  </div>
);

const buttonDocContent = (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Button</H1>
      <Lead>{m.docs_component_button_description()}</Lead>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_variants()}</H2>
      <div class='gap-4 flex flex-wrap'>
        <Button variant='default'>Default</Button>
        <Button variant='destructive'>Destructive</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='ghost'>Ghost</Button>
        <Button variant='link'>Link</Button>
      </div>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_sizes()}</H2>
      <div class='gap-4 flex flex-wrap items-center'>
        <Button size='sm'>Small</Button>
        <Button size='default'>Default</Button>
        <Button size='lg'>Large</Button>
      </div>
    </div>

    <ButtonGroupExamples />
  </div>
);

const ButtonDocPage: Component = () => buttonDocContent;

export const Route = createFileRoute('/components-button')({
  component: ButtonDocPage,
});
